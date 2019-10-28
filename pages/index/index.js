var app = new getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_show: false
  },
  asdf(e) {
    console.log(e)
  },
  copyGitHub(){
    wx.setClipboardData({
      data: 'https://github.com/yancekang/wechat-plug',
      success: function(){
        wx.showToast({
          icon: 'none',
          title: '项目地址复制成功！',
        })
      }
    })
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
    let v = wx.getStorageSync('v')
    if (v === app.globalData.v) {
      this.setData({is_show: false})
    } else {
      this.setData({ is_show: true })
    }
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