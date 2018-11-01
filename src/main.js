import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJs from 'bootstrap/dist/js/bootstrap.min.js'
import BootstrapVue from 'bootstrap-vue'
import animated from 'animate.css/animate.min.css'
import { store } from './store/store'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueCookies)

window.$cookies.config('30d', "/")  // default: expireTimes = 1d , path=/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
