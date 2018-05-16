// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
import App from './App';
import router from './router';
import store from './store';
import './needs';
import './assets/css/reset.css';
import './assets/css/element-reset.css';

Vue.config.productionTip = false;

Vue.use(VueLazyLoad, {
  error: './static/404.png',
  loading: './static/loading.png',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
