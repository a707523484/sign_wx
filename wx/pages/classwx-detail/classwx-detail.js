// pages/classwx-detail/classwx-detail.js
Page({
  onSignTask(){
    wx.navigateTo({
      url: '../signTask/signTask',
      success:(res)=>{
        res.eventChannel.emit('className',this.data.classList.className)
      }
    })
  },
  onTaskList(e){
    console.log(e);
    let id = e.currentTarget.dataset.item.taskId;
    wx.navigateTo({
      url: '../sign-detail/sign-detail?id='+id,
      success:(res)=>{
        res.eventChannel.emit('item',e.currentTarget.dataset.item)
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    status:'',
    classList:[],
    taskStatus:false,
    taskList:[],
    latitude:'',
    longitude:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel=this.getOpenerEventChannel();
    eventChannel.on('item',(data)=>{
      this.setData({
        classList:data
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
      url: 'http://127.0.0.1:8080/getTaskByCreator?creator='+this.data.classList.classTeacher+'&taskClass='+this.data.classList.className,
      success:(res)=>{
        console.log(res);
        if(res.data.length!==0){
          this.setData({
            taskStatus:true,
            taskList:res.data
          })
        }
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