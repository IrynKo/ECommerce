import {
  getProductById,
  getProductsList,
} from "../../services/product.service";


export default {
  state: {
    products: [],
    product: null,
  },
  getters: {
    products: (state) => state.products,
    product: (state) => state.product,
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_PRODUCT: (state, product) => {
      state.product = product;
    },
    CLEANUP: (state) => {
      state.product = null;
    },
  },
  actions: {
    getProducts: async ({ commit }) => {
      const { data } = await getProductsList();
      commit("SET_PRODUCTS", data);
    },

    getOneProduct: async ({ commit }, id) => {
      const res = await getProductById(id);
      commit("SET_PRODUCT", res.data);
    },
    cleanup: ({ commit }) => {
      commit("CLEANUP");
    },
  },
};
