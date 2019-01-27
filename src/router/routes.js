//   第一个是默认的首页
module.exports = [{
  path: 'pages/index/index',
  name: 'index',
  config: {
    navigationBarTitleText: '秀出你的美',
    enablePullDownRefresh: false,
    usingComponents: {
      'i-button': '../../iView/button/index'
    }
  }
}];
