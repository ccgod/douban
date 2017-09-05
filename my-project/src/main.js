// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Headers from './components/Header/Headers'
import App from './components/app/Vapp'
import router from './router'
import axios from 'axios'

// import VueRouter from './vue-router'
// import musicnt from './components/navigation//musicnt.vue'

Vue.config.productionTip = false;
Vue.use(router);
//axios 封装好
Vue.prototype.$ajax = axios


router.push('/nusicnt/heat');

// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: { App }
})


export default router;

//
