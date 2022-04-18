// pages/login/login.js
Page({
  formSubmit:function(e){
    this.setData({
      inputUserName:e.detail.value.inputName,
      inputUserPassword:e.detail.value.inputPassword
    })
    wx.request({
      url: 'http://127.0.0.1:8080/getUserByLogin?uname='+this.data.inputUserName+'&upassword='+this.data.inputUserPassword,
      success(res){
        console.log(res.data);
        if(res.data.length!==0){
          wx.setStorage({
            "key":"userStatus",
            "data":res.data
          }),
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
        else{
          wx.showToast({
            title: '登录失败',
            icon:'error',
            duration:2000
          })
        }
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    inputUserName:'',
    inputUserPassword:''
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

  }
})