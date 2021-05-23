import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import VueRouter from "vue-router";
import router from "./router";
import Notifications from "vue-notification";
import "material-design-icons-iconfont";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Notifications);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
