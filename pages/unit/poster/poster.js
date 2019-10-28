// pages/unit/poster/poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yiyan:'',
    qr_img: '',
    user_img: ''
  },

  createCanvas(){
    wx.showLoading({
      title: '绘制中...',
    })
    var that = this
    let canvasW = 690   //定义画布宽高，具体根据海报模板定义
    let canvasH = 1000
    let yiyan = that.data.yiyan
    var temp = "";
    var row = [];
    const ctx = wx.createCanvasContext('my_canvas')   // 获取绘图对象 my_canvas 为页面canvas的id
    ctx.clearRect(0, 0, canvasW, canvasH) // 清空画布
    ctx.setFillStyle('#ffffff')     //设置填充色
    ctx.fillRect(0, 0, canvasW, canvasH)	//填充画布
    //绘制蓝色背景
    ctx.setFillStyle('#0B5FA5')     //设置填充色
    ctx.fillRect(0, 0, 690, 800)
    //绘制每日一语
    ctx.setFontSize(40);
    ctx.setFillStyle("#fff")
    for (var a = 0; a < yiyan.length; a++) {
      if (ctx.measureText(temp).width < 630 && ctx.measureText(temp + (yiyan[a])).width <= 630) {
        temp += yiyan[a];
      }//ctx.measureText(text).width  测量文本text的宽度
      else {
        row.push(temp);
        temp = yiyan[a];
      }
    }
    row.push(temp);
    console.log(row)
    let top = (800 - row.length * 48) / 2
    for (var b = 0; b < row.length; b++) {
      console.log(((800 - top) / 2) + (b + 1) * 48)
      ctx.fillText(row[b], 30, top + (b + 1) * 48)
    }
    // 绘制圆角头像
    ctx.save()
    ctx.arc(30 + 45, 855 + 45, 45, 0, 2 * Math.PI);
    ctx.clip()
    ctx.drawImage(that.data.user_img, 30, 855, 90, 90)
    ctx.restore()
    // 绘制昵称
    ctx.setFontSize(32);
    ctx.setFillStyle("#333")
    ctx.fillText('科技男', 150, 890)
    ctx.setFontSize(24);
    ctx.setFillStyle("#999")
    ctx.fillText('邀请您使用微信小程序', 150, 930)

    // 绘制二维码
    ctx.drawImage(that.data.qr_img, 540, 835, 100, 100)
    ctx.fillText('长按识别二维码', 500, 970)
    ctx.draw(true, function (e) {
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success() {
                that.saveImages()
              },
              fail() {
                wx.showToast({
                  title: '保存失败',
                  icon: "none"
                })
              }
            })
          } else {
            that.saveImages()
          }
        }
      })
    })
  },
  saveImages() {
    wx.canvasToTempFilePath({
      canvasId: 'my_canvas',
      success(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.hideLoading()
            wx.showToast({
              title: '保存成功',
              icon: 'none'
            })
          }, complete: function () {
            wx.hideLoading()
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://api.ooopn.com/yan/api.php?type=json',
      success: (res) => {
        that.setData({ yiyan: res.data.hitokoto})
      }
    })
    // 保存头像
    wx.downloadFile({
      url: 'https://cdn.ctoku.com/blog/3629472230.jpg',
      success: function(res) {
        that.setData({ user_img: res.tempFilePath})
      },
      fail: function(res) {},
    })
    // 保存二维码
    wx.downloadFile({
      url: 'https://cdn.ctoku.com/blog/4275691247.jpg',
      success: function (res) {
        that.setData({ qr_img: res.tempFilePath })
      },
      fail: function (res) { },
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