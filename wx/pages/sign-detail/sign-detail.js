const { formatTime } = require("../../utils/util");

// pages/sign-detail/sign-detail.js
Page({
    // 经纬度转换成三角函数中度分表形式
    Rad(d) {
      return d * Math.PI / 180.0;
    },
    // 输出距离为公里
    getDistance(lat1,lng1,lat2,lng2){
      let radLat1=this.Rad(lat1);
      let radLat2=this.Rad(lat2);
      let a=radLat1-radLat2;
      let b=this.Rad(lng1)-this.Rad(lng2);
      let s=2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
      s = s *6378.137;
      s = Math.round(s * 10000) / 10000;
      console.log(s);
      return s
    },
    getDistanceRes(){
      let res=this.getDistance(this.data.taskList.taskAddressX,this.data.taskList.taskAddressY,this.data.latitude,this.data.longitude)
      this.setData({
        distance:res
      })
      if (res>=12) {
        wx.showToast({
          title: '不在签到范围',
          icon:'error',
          duration:2000
        })
        this.setData({
          signStatus:true
        })
      }
      else if(res<12){
        wx.request({
          url: 'http://127.0.0.1:8080/addRecord?recordStudent='+this.data.name+
          '&recordDate='+formatTime(new Date())+'&recordClass='+
          this.data.taskList.taskClass+'&recordTeacher='+
          this.data.taskList.taskCreator+'&recordAddress='+this.data.taskList.taskAddress,
          success:()=>{
            wx.showToast({
              title: '签到成功',
              icon:'success',
              duration:2000 
            })
            this.setData({
              signStatus:true,
              getLocation:'getLocationed'
            })
          }
        })
      }
    },
    getLocationed(){
      wx.showToast({
        title: '请勿重复签到',
        icon:'error',
        duration:2000
      })
    },
  getLocation(){
    wx.getSetting({
      success:(res)=>{
        if(!res.authSetting['scope.userLocation']){
          wx.authorize({
            scope: 'scope.userLocation',
            success:()=>{
              wx.getLocation({
                success:(res)=>{
                  this.setData({
                    latitude:res.latitude,
                    longitude:res.longitude
                  })
                  this.getDistanceRes()
                }
              })
            }
          })
        }
        else{
          wx.getLocation({
            success:(res)=>{
              this.setData({
                latitude:res.latitude,
                longitude:res.longitude
              })
              this.getDistanceRes()
            }
          })
        }
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    latitude:'',
    longitude:'',
    distance:'',
    taskList:[],
    name:'',
    status:'',
    studentList:[],
    signStatus:false,
    getLocation:'getLocation'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel=this.getOpenerEventChannel();
    eventChannel.on('item',(data)=>{
      this.setData({
        taskList:data
      })
    })
    wx.getStorage({
      key:'userStatus',
      success:(res)=>{
        this.setData({
          name:res.data[0].userName,
          status:res.data[0].userStatus
        })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:8080/getRecord?recordClass='+
      this.data.taskList.taskClass+'&recordTeacher='+
      this.data.taskList.taskCreator+'&recordAddress='+
      this.data.taskList.taskAddress
      ,
      success:(res)=>{
        this.setData({
          studentList:res.data
        })
      }
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