import Vuex from "vuex";
import Vue from "vue";
import authModule from "./modules/auth";
import cart from "./modules/cart";
import orders from "./modules/orders";
import products from "./modules/products";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ["auth.token", "cart"],
});
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authModule,
    products,
    cart,
    orders,
  },
  plugins: [dataState],
});

