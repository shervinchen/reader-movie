// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTap: function() {
    // wx.redirectTo({
    //   url: '../posts/posts',
    // })
    wx.switchTab({
      url: '../posts/posts',
    })
  }
})