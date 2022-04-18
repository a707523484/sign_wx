// pages/signTask/signTask.js
Page({
  getLocation(){
    wx.getSetting({
      success:(res)=>{
        if(!res.authSetting['scope.userLocation']){
          wx.authorize({
            scope: 'scope.userLocation',
            success:()=>{
              wx.chooseLocation({
                success:(res)=>{
                  console.log(res);
                  this.setData({
                    address:res.address,
                    latitude:res.latitude,
                    longitude:res.longitude,
                    addressName:res.name
                  })
                  this.setData({
                    getLocation:false
                  })
                }
              })
            }
          })
        }
        else{
          wx.chooseLocation({
            success:(res)=>{
              console.log(res);
              this.setData({
                address:res.address,
                latitude:res.latitude,
                longitude:res.longitude,
                addressName:res.name
              })
            }
          })
          this.setData({
            getLocation:false
          })
        }
      }
    })
  },
  bindStartDateChange(e){
    console.log('bindStartDate发送选择改变，携带值为', e.detail.value)
    this.setData({
      startDate: e.detail.value,
    })
  },
  bindEndDateChange(e){
    console.log('bindEndDateChange发送选择改变，携带值为', e.detail.value)
    this.setData({
      endDate: e.detail.value,
    })
  },
  submitTask(){
    wx.request({
      url: 'http://127.0.0.1:8080/addTask?taskAddress='+this.data.address+'&taskAddressX='+this.data.latitude+'&taskAddressY='+this.data.longitude+'&taskStart='+this.data.startDate+'&taskEnd='+this.data.endDate+'&taskCreator='+this.data.userName+'&taskClass='+this.data.className,
      success:()=>{
        wx.showToast({
          title: '创建签到成功',
          icon:'success',
          duration:2000
        })
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    latitude:'',
    longitude:'',
    addressName:'',
    startDate:'',
    endDate:'',
    userName:'',
    userStatus:'',
    className:'',
    getLocation:true,
    bindStartDateChange:true,
    bindEndDateChange:true
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
    const eventChannel=this.getOpenerEventChannel();
    eventChannel.on('className',(data)=>{
      this.setData({
        className:data
      })
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