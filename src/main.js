// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  // {path: '/', redirect: '/pages/index'}
  // {path: '/index', component: resolve => require(['pages/index'], resolve)}
];
const router = new VueRouter({
  mode: 'history',
  hashbang: true,
  routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#uReal',
  router,
  template: '<App/>',
  components: {App}
});
