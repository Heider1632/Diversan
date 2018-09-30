import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJs from 'bootstrap/dist/js/bootstrap.min.js'
import VueProgressBar from 'vue-progressbar'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '10px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
