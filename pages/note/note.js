// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  properties: {
    list: {
      type: Object,
      value: [] //item对象内容{url:"",localUrl:"",progress:0}
    },
  },

  detail:function(e){
    console.log(JSON.stringify(e.currentTarget.dataset))
    wx.navigateTo({
      url: './detail?id=' + e.currentTarget.dataset.id,
    })
  },

  isEmpty(str){
    return str==null || str==undefined || str=='';
  },

  getMinString(str, min){
    let dot = '';
    if(str.length>min){
      dot = '...';
    }
    return this.isEmpty(str) ? '' : str.substring(0, min) + dot;
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
    var tmpList = [{
      id: 0,
      title: '又会从后台进入前台又会从后台进入前台又会从后台进入前台又会从后台进入前台又会从后台进入前台',
      content: '又会从后台进入前台又会从后台进入前台又会从后台进入前台又会从后台进入前台',
      date: '2018年02月07日',
      folder: '好长好长的笔记本好长好长的笔记本',
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
    }]; 
    tmpList.forEach((element) => {
      element.temp = this.getMinString(element.title, 9);
      element.tempContent = this.getMinString(element.content, 32);
      element.tempFolder = this.getMinString(element.folder, 11);
    })
    console.log(tmpList[0])
    this.setData({list:tmpList});
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