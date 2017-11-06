// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import iView from 'iview';
import BaiduMap from 'vue-baidu-map';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'iview/dist/styles/iview.css';
import 'swiper/dist/css/swiper.css';
import 'assets/styles/common.css';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);
Vue.use(VueAwesomeSwiper);
Vue.use(BaiduMap, {
  ak: 'FftBBGSXjxULed04yMxyM9Wk'
});
const routes = [
  {path: '/', redirect: '/index'},
  {path: '/index', component: resolve => require(['pages/index/index'], resolve)},
  {path: '/ureal3D', component: resolve => require(['pages/ureal3D/ureal3D'], resolve)},
  {path: '/device', component: resolve => require(['pages/3dDevice/3dDevice'], resolve)},
  {path: '/service', component: resolve => require(['pages/3dService/3dService'], resolve)},
  {path: '/material', component: resolve => require(['pages/3dMaterial/3dMaterial'], resolve)},
  {path: '/device', component: resolve => require(['pages/3dDevice/3dDevice'], resolve)},
  {path: '/urealNews', component: resolve => require(['pages/urealNews/news'], resolve)},
  {path: '/SC', component: resolve => require(['pages/SC/SC'], resolve)},
  {path: '/contactUs', component: resolve => require(['pages/contactUs/contactUs'], resolve)}
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
