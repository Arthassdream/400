// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.css'
// import Axios from '@/assets/js/Axios'

Vue.use(ElementUi)
// import { Button, Select } from 'element-ui';
// Vue.prototype.$http = Axios
// router.beforeEach((to, from, next) => {
//   next()
// })
// Vue.use(Button).use(Select)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
