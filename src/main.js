import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '../src/assets/init.less'
import axios from 'axios'
//  配置axios
axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/269691/'
/* axios.interceptors.request.use(config=>{
  config.header.authToken = window.sessionStorage.getItem("authToken")
  return config
}) */
Vue.prototype.$axios = axios
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
