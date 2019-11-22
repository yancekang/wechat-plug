// pages/log/log.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    log: [
      {
        version: '1.0.3',
        years: '2019',
        time: '11.22',
        des: [
          '新增身份证拍摄取景框'
        ]
      },
      {
        version: '1.0.2',
        years: '2019',
        time: '10.28',
        des: [
          '新增生成海报并保存到本地功能',
          '修复订单操作功能适配iPhone X系列手机'
        ]
      },
      {
        version: '1.0.1',
        years: '2019',
        time: '10.12',
        des: [
          '新增订单操作功能',
          '新增输入框输入提示',
          '新增时间线',
          '修改城市选择描述错误',
        ]
      },
      {
        version: '1.0.0',
        years: '2019',
        time: '10.09',
        des: [
          '新增页面自定义顶部',
          '新增获取地理位置',
          '新增城市选择',
          '新增日历控件',
          '插件集发布第一版'
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('v', app.globalData.v)
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