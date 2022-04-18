// pages/my/my.js
Page({
  exit(){
    wx.navigateTo({
      url: '../login/login',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userStatus:'',
    call:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key:'userStatus',
      success:(res)=>{
        this.setData({
          userName:res.data[0].userName,
          userStatus:res.data[0].userStatus
        })
      }
    })
    if (this.data.userStatus==1) {
      this.setData({
        call:'老师'
      })
    }
    else{
      this.setData({
        call:'学生'
      })
    }
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