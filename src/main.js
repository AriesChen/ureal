// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import iView from 'iview';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'iview/dist/styles/iview.css';
import 'swiper/dist/css/swiper.css';
// import 'assets/styles/myTheme';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);
Vue.use(VueAwesomeSwiper);

const routes = [
  {path: '/', redirect: '/index'},
  {path: '/index', component: resolve => require(['pages/index/index'], resolve)},
  {path: '/ureal3D', component: resolve => require(['pages/ureal3D/ureal3D'], resolve)}
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
