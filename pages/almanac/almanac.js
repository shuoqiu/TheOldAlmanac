// pages/almanac/almanac.js
var app = getApp();
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var page = this;
    app.getUserInfo(function(userInfo){
      page.setData({
        userInfo: userInfo
      });
    });
    this.loadData();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  loadData:function(){
    var page = this;
    var appKey = "a7b364a2b6ac1be0be2a0913b4c4d311";
    wx.request({
      url: 'https://v.juhe.cn/laohuangli/d?date=2017-01-12&key=' + appKey,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      }, // 设置请求的 header
      success: function(res){
        console.log(res.data.result);
        var result = res.data.result;
        page.setData({
          yinli: result.yinli,
          yangli: result.yangli,
          wuxing: result.wuxing,
          chongsha: result.chongsha,
          baiji: result.baiji,
          jishen: result.jishen,
          xiongshen: result.xiongshen,
          yi: result.yi,
          ji: result.ji
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})