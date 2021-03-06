import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VMask from 'v-mask';
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

Vue.use(VMask);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')