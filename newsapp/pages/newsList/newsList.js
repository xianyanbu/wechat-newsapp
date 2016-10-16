var Api = require('../../utils/api.js');
var util = require('../../utils/util.js');

Page({
  data: {
    title: '新闻列表',
    postsList: [],
    hidden: false,
    page: 1,
    tab: 'top'
  },
  onPullDownRefresh: function () {
    this.fetchData();
    console.log('下拉刷新', new Date());
  },
  onLoad: function () {
    console.log(1)
    this.fetchData();
  },
  onTapTag: function (e) {
    // console.dir(e)
    // console.log(e);
    var self = this;
    var tab = e.currentTarget.id;
    self.setData({
      tab: tab
    });
    if (tab !== 'top') {
      this.fetchData({tab: tab});
    } else {
      this.fetchData();
    }
  },
  fetchData: function (data) {
    var self = this;
    self.setData({
      hidden: false
    });
    if (!data) data = {};
    if (!data.tab) data.tab = "top";
      self.setData({
        postsList: []
      });
    
    wx.request({
      url: Api.getNewsList(data),
      success: function (res) {
          console.log(res);
        self.setData({
          postsList: self.data.postsList.concat(res.data.result.data.map(function (item) {
            item.last_reply_at = util.getDateDiff(new Date(item.date));
            return item;
          }))
        });
        setTimeout(function () {
          self.setData({
            hidden: true
          });
        }, 300);
      }
    });
  },
  redictDetail: function (e) {
    console.log('我要看详情');
    var id = e.currentTarget.id;
        url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url
    })
  }

})
