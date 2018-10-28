import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJs from 'bootstrap/dist/js/bootstrap.min.js'
import BootstrapVue from 'bootstrap-vue'
import animated from 'animate.css/animate.min.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
