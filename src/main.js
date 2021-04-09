
// 注册svg
import './svgs';

import Vue from 'vue';
import App from './App.vue';
import './register-service-worker';
import router from './router';
import store from './store';
import { initInstance } from '@/api';

import './components';
import './styles/index.scss';

Vue.config.productionTip = false;

(async function () {
  const appConfig = await store.dispatch('app/getBaseInfo');
  document.title = appConfig.name;
  initInstance(appConfig);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
})();
