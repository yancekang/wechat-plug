// components/common/cell/cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认标题'
    },
    tips: {
      type: String,
      value: ''
    },
    to: {
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goUrl() {
      if (this.data.to) {
        wx.navigateTo({
          url: this.data.to,
        })
      }
    }
  }
})
