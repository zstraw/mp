import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false

const app = new Vue(App)

app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [

    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'game',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true
    }
  }
}
