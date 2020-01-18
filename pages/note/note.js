// pages/note/note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },
  properties: {
    // list: {
    //   type: Object,
    //   value: [] 
    // },
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
    this.selectComponent('#list').init(this.getList)
    // this.getList();
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
  getList(currentPage, pageCount) {
    var tmpList = [];
    tmpList.push({
      id: 0,
      title: '又会从后台进入前台又会从后台进入前台又会从后台进入前台又会从后台进入前台又会从后台进入前台',
      content: '又会从后台进入前台又会从后台进入前台又会从后台进入前台又会从后台进入前台',
      date: '2018年02月07日',
      folder: '好长好长的笔记本好长好长的笔记本',
    });
    let tmp = this.data.list.length == 0 ? 10 : 5;
    console.log(tmp)
    for (let i = 1; i < tmp;i++){
      tmpList.push({
        id: i,
        title: 't' + i,
        content: 'c' + i,
        date: 'd' + i,
        folder: 'f' + i,
      })
    }
    tmpList.forEach((element) => {
      element.tempTitle = this.getMinString(element.title, 9);
      element.tempContent = this.getMinString(element.content, 32);
      element.tempFolder = this.getMinString(element.folder, 11);
    })
    //this.data.list.length == 0 ? tmpList : this.data.list.concat(tmpList)
    this.setData({ 
      list: currentPage == 1 ? tmpList : this.data.list.concat(tmpList)
    });
    console.log(this.data.list)
    this.selectComponent('#list').loadSuccess({
      total: 15,
      currentSize: this.data.list.length,
      nextPage: 2
    })
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
    console.log("onPullDownRefresh", this.selectComponent('#list'))
    this.selectComponent('#list').refresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom", this.selectComponent('#list'))
    this.selectComponent('#list').loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})