// pages/addTodo/addTodo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'hello word!',

    id: 1,

    arr: [1, 2, 3, 4, 5, 6, 'hello'],

    val: '',

    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



  onShow:function(){
    var that = this;
    wx.cloud.callFunction({
      name: "content",
      success: function (res) {
        var result = res.result.data[res.result.data.length - 1].thing
        console.log(res)
        that.setData({
          list: result,
         
        })
      }
    })
  },

  getval(e) {

    // console.log(e.detail.value)

    this.setData({ val: e.detail.value })

  },

  add() {

    var data1 = this.data.list;

    data1.push(this.data.val)

    this.setData({ list: data1, val: '' })

    var db = wx.cloud.database()
    db.collection("content").add({
      data: { thing: data1 },
      success: function (res) {
        console.log(res)
      }
    })

    








  },

  del(e) {

    // console.log(e.target.dataset.index)

    var i = e.target.dataset.index;

    var data2 = this.data.list;

    data2.splice(i, 1)

    this.setData({ list: data2 })
    var db = wx.cloud.database()
    db.collection("content").add({
      data: { thing: data2 },
      success: function (res) {
        console.log(res)
      }
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../plan/plan'
    })
  },
})