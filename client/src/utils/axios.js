import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  //baseURL: "https://apt-booking-api.herokuapp.com/",
});
axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = store.state.auth;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
