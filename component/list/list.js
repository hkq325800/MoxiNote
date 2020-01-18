// component/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    listSize: {
      type: Number,
      value: 0
    },
    emptySrc: {
      type: String,
      value: "/res/assets/empty.png"
    },
    emptyHintStr: {
      type: String,
      value: "暂时没有找到相关信息"
    },
    emptyTop:{
      type: String,
      value: "30%"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    topheight: 0,
    pageInfo: {},
    getListFunc: undefined,
    loading: false,
    refreshing: false

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 设置列表距顶部距离
     */
    init(getListFunc) {
      const query = wx.createSelectorQuery()
      query.select('#top').boundingClientRect((res) => {
        console.log("LCZ",res)
        if (res) {
          let topheight = res.height;
          this.setData({
            topheight
          })
        }
      }).exec()
      this.data.getListFunc = getListFunc;
      if (getListFunc) {
        getListFunc(1, 10)
      }
    },
    /**
     * 加载成功,设置列表分页信息
     */
    loadSuccess(pageInfo) {
      this.data.pageInfo = pageInfo;
      this.data.loading = false
      if (this.data.refreshing) {
        this.data.refreshing = false
        wx.stopPullDownRefresh()
      }
    },
    /**
     * 加载失败
     */
    loadFail() {
      this.data.loading = false
      if (this.data.refreshing) {
        this.data.refreshing = false
        wx.stopPullDownRefresh()
      }
    },
    refresh() {
      if (!this.data.loading) {
        if (this.data.getListFunc) {
          this.data.loading = true
          this.data.refreshing = true
          this.data.getListFunc(1, 10)
        } else {
          wx.stopPullDownRefresh()
        }
      } else {
        wx.stopPullDownRefresh()
      }
    },
    loadMore() {
      if (!this.data.loading) {
        if (this.data.pageInfo) {
          if (this.data.pageInfo.currentSize < this.data.pageInfo.total) {
            if (this.data.getListFunc) {
              this.data.loading = true
              this.data.refreshing = true
              this.data.getListFunc(this.data.pageInfo.nextPage, 10)
            }
          } else {
            wx.showToast({
              title: '已加载全部数据',
            })
          }
        }
      }

    }
  },
  lifetimes: {
    attached() {},
    detached() {}
  }
})