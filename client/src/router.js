import Vue from "vue";
import VueRouter from "vue-router";
import Products from "./pages/Products.vue";
import ProductDetails from "./pages/ProductDetails.vue";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import store from "./store";
import OrderPage from "./pages/OrderPage";
import OrdersPage from "./pages/OrdersPage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/details/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
    
  },
    /*component: () =>
      import(/* webpackChunkName: "about" */ {
    path: "/order",
    component: OrderPage,
    name: "order",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    component: OrdersPage,
    name: "orders",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login-page" });
    }
  }
  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "Products" });
    }
  }
  next();
});

export default router;

