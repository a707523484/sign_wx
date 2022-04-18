const { dateDiff, formatTime, formatTime_8 } = require("../../utils/util");

// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    auth:'',
    call:'',
    date1:'',
    date2:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.auth==1) {
      this.setData({
        call:'老师'
      })
    }
    else{
      this.setData({
        call:'同学'
      })
    }
    this.setData({
      date1:dateDiff(formatTime_8(new Date()),'2022-06-20'),
      date2:dateDiff(formatTime_8(new Date()),'2022-12-24')
    })
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
    wx.getStorage({
      key:'userStatus',
      success:(res)=>{
        this.setData({
          name:res.data[0].userName,
          auth:res.data[0].userStatus
        })
      }
    })
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