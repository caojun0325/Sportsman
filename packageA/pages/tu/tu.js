const app = getApp()


Page({
  data: {
    contents: "",
  },
  onLoad: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }


    var _this = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'list8',
      // 传给云函数的参数
      data: {
        tag: 1,
       
      },
      success: function (res) {
        console.log(res.result)
        _this.setData({
          contents: res.result.data[0].content,
          content1s: res.result.data[0].content1,
          content2s: res.result.data[0].content2,
          content3s: res.result.data[0].content3,
          content4s: res.result.data[0].content4,
        })
      },
      fail: console.error
    })
  }
})