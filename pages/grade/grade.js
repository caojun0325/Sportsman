Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    
  },
 
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  var tz=e.detail.value.weight;
  var sg=e.detail.value.height;
  var sex=e.detail.value.sex;
  var bmi;
  
  if(sg>100){
    sg=sg*1.0/100;
  }
  bmi = tz / sg / sg;
if((tz<150)&&(tz>30)&&(sg>=1.4)&&(sg<=2.1)){
if(bmi<18.5){
  wx.navigateTo({
    url: '../ps/ps',
  })
}else if((bmi>=18.5)&&(bmi<=23.9)){
wx.navigateTo({
  url: '../zc/zc',
})
} else if ((bmi >23.9) && (bmi <=26.9)) {
  wx.navigateTo({
    url: '../bitfp/bitfp',
  })
} else if ((bmi >= 26.9) && (bmi <= 29.9)) {
  wx.navigateTo({
    url: '../fp/fp',
  })
} else if (bmi>29.9) {
  wx.navigateTo({
    url: '../ofp/ofp',
  })
}
} else {
  wx.navigateTo({
    url: '../err/err',
  })
}
  },
  formReset: function () {
    console.log('form发生了reset事件')
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
  /*cBMI: function (event) {
    console.log('height, weight, sex');
    console.log(event.target.name);
  },*/
})
