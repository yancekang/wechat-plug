Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    show: false
  },
  cancelBtn () {
    this.setData({show: false})
  },
  saveImg () {
    wx.showModal({
      title: '图片地址',
      content: this.data.src,
    })
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    const listener = ctx.onCameraFrame((frame) => {
      console.log(frame)
    })
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempImagePath,
          show: true
        })
        listener.stop({
          success: (res) => {
            console.log(res)
          },
          fail: (err) =>{
            console.log(err)
          }
        })
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showModal({
      title: '提示',
      content: '该功能仅供演示，不会上传图片信息，请放心使用！！！',
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