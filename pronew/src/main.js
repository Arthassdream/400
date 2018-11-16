// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.css'
import Axios from '@/assets/js/Axios'

Vue.use(ElementUi)
Vue.prototype.$http = Axios
// router.beforeEach((to, from, next) => {
//   next()
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
