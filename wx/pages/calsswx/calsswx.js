// pages/calsswx/calsswx.js
Page({
  onClass(e){
    console.log(e);
    wx.navigateTo({
      url: '../classwx-detail/classwx-detail',
      success:function(res){
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
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key:'userStatus',
      success:(res)=>{
        this.setData({
          name:res.data[0].userName,
          status:res.data[0].userStatus
        })
        if(this.data.status==1){
          let studentClassList=[];
          let studentClassList2=[];
          wx.request({
            url: 'http://127.0.0.1:8080/getClassByStudentName?studentName='+this.data.name,
            success:(res)=>{
              for(let i in res.data){
                studentClassList.push(res.data[i].studentClass)
              }
              for(let i in studentClassList){
                wx.request({
                  url: 'http://127.0.0.1:8080/getClassByClassName?className='+studentClassList[i],
                  success:(res)=>{
                    studentClassList2.push(res.data[0]);
                    this.setData({
                      classList:studentClassList2
                    })
                  }
                })
              }
            }
          })
        }
        else{
          wx.request({
            url: 'http://127.0.0.1:8080/getClassByTeacher?uteacher='+this.data.name,
            success:(res)=>{
              this.setData({
                classList:res.data
              })
              console.log(this.data.classList);
            }
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