//app.js
App({
  onLaunch: function () {
    wx.getSystemInfo({ // iphonex底部适配
      success: res => {
        this.globalData.systeminfo = res
      }
    })
    this.globalData.headerBtnPosi = wx.getMenuButtonBoundingClientRect()
  },
  globalData: {
    userInfo: null,
    systeminfo:{},
    headerBtnPosi:{}
  }
})