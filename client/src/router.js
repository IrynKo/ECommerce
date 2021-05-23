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
    /* meta: {
      requiresAuth: true,
    },*/
  } /* "./pages/About.vue"),
  },*/,
  /*{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
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

/*import HomePage from "./pages/HomePage";
import Apartment from "./pages/ApartmentPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import VueRouter from "vue-router";
//import store from "./store";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homePage",
  },
  {
    path: "/products/:id",
    component: Apartment,
    name: "apartment",
    /*meta: {
      requiresAuth: true,
    },*/
/*},
  {
    path: "/shopCart",
    component: CartPage,
    name: "shopCart",
    /*meta: {
      requiresAuth: true,
    },*/
/* },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    /* meta: {
      hideForAuth: true,
    },*/
/* },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
    /*meta: {
      hideForAuth: true,
    },*/
/*},
  {
    path: "*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

/*router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login-page" });
    }
  }
  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "homePage" });
    }
  }
  next();
});*/

/*export default router;*/
