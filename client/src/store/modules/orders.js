import { createOrder, getAllOrders } from "../../services/orders.service";

export default {
  state: {
    orders: [],
  },
  getters: {
    orders: (state) => state.orders,
  },
  mutations: {
    SET_ORDERS: (state, orders) => {
      state.orders = orders;
      //console.log("Orders", orders);
    },
  },
  actions: {
    async addOrder(/*{ commit }*/ _, payload) {
      const { data } = await createOrder(payload);

      //const { order } = data.data;
      console.log("data", data);
      //console.log("user", user);
      //commit("SET_USER_DATA", user /*{ ...user, token: token }*/);
      //commit("SET_TOKEN", token);
    },
    getOrders: async ({ commit }) => {
      //const res = await axios.get("/products");
      const { data } = await getAllOrders();
      commit("SET_ORDERS", data.data);
    },
    /* async getOrders({ commit }) {
      //const res = await axios.get("/products");
      const { data } = await getOrders();
      //const orders = data.data;
      console.log("getOrders", data.data);
      commit("SET_ORDERS", data.data);
    },*/
  },
};
