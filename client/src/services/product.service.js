import axios from "../utils/axios";

export const getProductsList = () => {
  return axios.get("/products");
};

export const getProductById = (id) => {
  return axios.get(`/products/${id}`);
};
