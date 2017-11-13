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
import 'assets/styles/iconfont.css';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iView);
Vue.use(VueAwesomeSwiper);
Vue.use(BaiduMap, {
  ak: 'FftBBGSXjxULed04yMxyM9Wk'
});
Vue.prototype.HttpRequest = function (options) {
  var me = this;
  if (!options || typeof (options) !== 'object') {
    return;
  }
  if (!options['postUrl']) {
    return;
  }
  var requestParams = {};
  if (options['param']) {
    var param = options['param'];
    if (param && typeof (param) === 'object') {
      requestParams = param;
    }
  }
  requestParams['random'] = Math.random();
  var successCode = 200;
  var url = options['postUrl'];
  var hideLoading = options['hideLoading'];
  if (options['successCode']) {
    successCode = options['successCode'];
  }
  if (!hideLoading) {
    var load = this.$loading({text: '数据加载中...'});
  }
  switch (options.type) {
    case 'POST':
    case 'post':
      this.$http.post(url, requestParams).then(response => {
        dealData(response.data);
      }, response => {
        dealError(response.data.error);
      });
      break;
    case 'GET':
    case 'get':
      var params = [];
      for (var key in requestParams) {
        params.push(key + '=' + requestParams[key]);
      }
      if (params.length > 0) {
        url = url + '?' + params.join('&');
      }
      this.$http.get(url).then(function (response) {
        dealData(response.data);
      }, function (response) {
        dealError(response.data.error);
      });
      break;
    case 'DELETE':
    case 'delete':
      var delParams = [];
      for (var keys in requestParams) {
        delParams.push(keys + '=' + requestParams[keys]);
      }
      if (delParams.length > 0) {
        url = url + '?' + delParams.join('&');
      }
      this.$http.delete(url).then((response) => {
        dealData(response.data);
      }, function (response) {
        dealError(response.data.error);
      });
      break;
    case 'PUT':
    case 'put':
      this.$http.put(url, requestParams).then((response) => {
        dealData(response.data);
      }, function (response) {
        dealError(response.data);
      });
      break;
  }
  var dealError = function (resData) {
    if (load) {
      load.close();
    }
    if (resData) {
      if (resData.stat) {
        me.$confirm(resData.error, '请求失败', {
          closeOnClickModal: true,
          showCancelButton: false,
          lockScroll: true,
          type: 'error'
        });
      }
    }
  };
  var dealData = function (resData) {
    if (resData.stat === successCode) {
      if (options['success']) {
        options['success'](resData.data);
      }
    } else {
      if (options['failed']) {
        options['failed'](resData.error, resData.stat);
      } else {
        dealError(resData);
      }
    }
    if (load) {
      load.close();
    }
  };
};
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
