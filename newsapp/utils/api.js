var HOST_URI = 'http://v.juhe.cn/toutiao/index';

var APPKEY = '079b794e481cd03ae363d5b4a4eddd57';


module.exports = {
    // 获取列表数据
    getNewsList: function (DATA) {
        console.log(DATA);
        console.log(HOST_URI + '?type=' + DATA.tab + '&key=' + APPKEY);
        return HOST_URI + '?type=' + DATA.tab + '&key=' + APPKEY;
    },
    // 获取内容页数据
    getNewsByUrl: function (URL) {
        return URL;
    }
};