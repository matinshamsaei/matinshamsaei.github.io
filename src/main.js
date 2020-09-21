import Vue from 'vue';
import App from './App.vue';
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trade-eb949.firebaseio.com/';

Vue.filter('localeString' , function (value) {
  return '$' + value.toLocaleString();
});

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
