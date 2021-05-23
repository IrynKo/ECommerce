import { loginUser, registerUser, logout } from "../../services/auth.service";
const initialState = {
  user: null,
  token: "",
};
export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      //console.log("userData", userData);
      //setUserData(state, userData) {
      state.user = userData;
    },
    SET_TOKEN(state, token) {
      //setToken(state, token) {
      state.token = token;
      //console.log("token", token);
    },
    CLEAR_USER_DATA(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);

      const { user, token } = data.data;
      commit("SET_USER_DATA", user /*{ ...user, token: token }*/);
      commit("SET_TOKEN", token);
      //commit("setUserData", user);
      //commit("setToken", token);
    },
    async registration({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data.data;

      commit("SET_USER_DATA", user);
      commit("SET_TOKEN", token);
      //commit("setUserData", user);
      //commit("setToken", token);
    },
    async logOut({ commit }) {
      await logout();
      commit("CLEAR_USER_DATA");
    },
  },
};
