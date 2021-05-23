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
     
    },
  },
  actions: {
    async addOrder(/*{ commit }*/ _, payload) {
      /*const { data } =*/ await createOrder(payload);
      
    },
    getOrders: async ({ commit }) => {
      
      const { data } = await getAllOrders();
      commit("SET_ORDERS", data.data);
    },
    
  },
};
