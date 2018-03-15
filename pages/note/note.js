// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[{
      id: 0,
      title:'t1t1t1t1t1t1t1t1t1t1t1t1t1t1t1t1',
      content:'c1c1c1c1c1c1c1c1c1c1c 1c1c1c1c1c1c1c1c1 c1c1c1c1c1c1c1c1c1c 1c1c1c1c1c1c1c1c1c1',
      date:'2018年02月07日',
      folder:'好长好长的笔记本',
    }, {
      id: 1,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 2,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 3,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 4,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 5,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 6,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 7,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 8,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 9,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 10,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 11,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    }, {
      id: 12,
      title: 't1',
      content: 'c1',
      date: 'd1',
      folder: 'f1',
    },]
  },

  detail:function(e){
    console.log(JSON.stringify(e.currentTarget.dataset))
    wx.navigateTo({
      url: './detail?id=' + e.currentTarget.dataset.id,
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