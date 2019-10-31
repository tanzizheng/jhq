import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入axios和vue-axios的固定操作
import axios from 'axios'
// VUE扩展模块
import VueAxios from "vue-axios"
// 注册模块(集成到我们的vue里)
Vue.use(VueAxios,axios)
// 配置默认固定地址Request URL: http://www.codeboy.com/mfresh/data/news_select.php
Vue.axios.defaults.baseURL="http://www.codeboy.com/mfresh/data/"
// 跨域操作                 "content-type": "application/x-www-form-urlencoded"
Vue.axios.defaults.headers={"content-type": "application/x-www-form-urlencoded"}
new Vue({
  render: h => h(App),
}).$mount('#app')
