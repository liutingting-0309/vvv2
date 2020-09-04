import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import '../public/css/font_2044454_kxvq8mhpxm/iconfont.css'
import '../public/css/font_2044454_kxvq8mhpxm/iconfont.js'

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
