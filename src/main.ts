import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./plugins/vuesax.js";
import "./plugins/fundamental-vue.js";
//import VueGeolocation from 'vue-browser-geolocation';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
