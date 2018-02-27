// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import App from './App'

Vue.use(ElementUI)
Vue.config.productionTip = false
/* 把axios挂载到vue上 就可以用this.$axios了 */
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
