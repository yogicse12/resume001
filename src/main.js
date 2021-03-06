import Vue from 'vue';
import App from './App.vue';

import '@/scss/style.scss';
import router from './router'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
