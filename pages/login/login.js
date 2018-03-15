const { User } = require('../../utils/av-live-query-weapp-min');

Page({
  data: {
    status: 0,
    //0-登录 注册 忘记密码
    //1-返回登录 注册确认 忘记密码
    //2-返回登录 注册 找回密码
    user: null,
    username: '',
    password: '',
    error: null,
  },
  onLoad: function () {
    this.setData({
      // user: User.current(),
    });
  },
  updateUsername: function (e) {
    this.setData({
      username: e.detail.value
    });
  },
  updatePassword: function (e) {
    this.setData({
      password: e.detail.value
    });
  },
  //最终调用
  funk: function (status, func) {
    //符合按钮为蓝色 可进行网络请求
    if (this.data.status == status) {
      if(func){
        func()
      }
    } else {
      this.setData({
        status: status
      });
    }
  },
  login: function () {
    this.funk(0, function(){
      wx.showToast({
        title: '登陆成功',
      })
    })
  },
  signUp: function () {
    this.funk(1, function () {
      wx.showToast({
        title: '注册成功',
      })
    })
  },
  findBack: function () {
    this.funk(2, function () {
      wx.showToast({
        title: '找回成功',
      })
      wx.navigateBack()
    })
  },
  save: function () {
    const { username, password } = this.data;
    this.setData({
      error: JSON.stringify(this.data),
    });
    // user为取回来的实例
    // const user = User.current();
    console.log(this.data)
    // if (username) user.set({ username });
    // if (password) user.set({ password });
    // user.save().then(() => {
    //   wx.showToast({
    //     title: '更新成功',
    //     icon: 'success',
    //   });
    // }).catch(error => {
    //   this.setData({
    //     error: error.message,
    //   });
    // });
  },
  getCode: function(){
    wx.showToast({
      title: '获取验证码成功！',
    })
  }
});