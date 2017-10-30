import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);


const routes = [
  {path: '/', redirect: '/pages/index'}
  // {path: '/org', component: resolve => require(['components/department/department'], resolve)},
];
const router = new VueRouter({
  mode: 'history',
  hashbang: true,
  routes: routes
});

Vue.prototype.cloneObj = function (obj) {
  var str, newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  } else if (window.JSON) {
    str = JSON.stringify(obj),
      newobj = JSON.parse(str);
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? this.cloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
};
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
    var load = this.$loading({text: '疯狂的往死里加载中...'});
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
        }).then(action => {
          if (Number(resData.stat) === 401 || Number(resData.stat) === 402) {
          sessionStorage.clear();
          window.location.href = '/login';
        }
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


new Vue({
  el: '#uReal',
  router,
  template: '<App/>',
  components: {App}
});
