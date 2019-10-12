// pages/unit/pre_input/pre_input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pre_list: []
  },
  setKey (e) {
    this.setData({key: e.detail.value})
    if (e.detail.value) {
      var pre_list = []
      for (var i = 0; i < 3; i++) {
        pre_list.push(e.detail.value + ' ' + i + i)
      }
      this.setData({ pre_list: pre_list })
    } else {
      this.setData({pre_list: []})
    }
  },
  goSearch(e) {
    wx.showToast({
      icon: 'none',
      title: '搜索：' + e.currentTarget.dataset.key,
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