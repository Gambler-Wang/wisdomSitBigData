// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.css'
import './utils/directives'
import Methods from './utils/methods'
import dataV from '@jiaminghi/data-view'
import {getRequest, postRequest} from './utils/axios.config'
import 'babel-polyfill'
// import {API_BASE_URL} from '@/config/app.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Methods)
Vue.use(dataV)
// 定义一个全局混合对象
Vue.mixin({
  data() {
    return {
      api: require('./config/api.js'),
      BASE: require('./config/app.js'),
      url_:window.location.protocol+'//'+window.location.host+'/intellij-site/',
      // limitData:JSON.parse(window.localStorage.getItem('limit'))
      // limitData:require('./config/limit.js'),
    }
  },
  methods: {
    request:function (url, params = {},method = "post",header='application/x-www-form-urlencoded', token = this.getCookie('smartdeviceToken')) {
      if(method === 'post'||method === 'POST'){
        return this.postRequest(url,params,method,header,token)
      }
      if(method === 'get'||method === 'GET'){
        return this.getRequest(url,params,token)
      }
      console.log(method)
    },
    
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
