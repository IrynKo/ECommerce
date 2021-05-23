import axios from "../utils/axios";

export const createOrder = (payload) => {
  return axios.post("/order", payload);
};
export const getAllOrders = () => {
  return axios.get("/order");
};
