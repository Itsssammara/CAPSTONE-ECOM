import { createStore } from 'vuex'
import axios from "axios";
import sweet from "sweetalert";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import router from "@/router";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
  },
  actions: {
    async register(context, packet) {
      try {
        let {message} = await (
          await axios.post(`${blueURL}users/register`, packet))
          .data;
        console.log(message);
          context.dispatch("fetchUsers");
          sweet({
            title: "Registration",
            text: message,
            icon: "success",
            timer: 2000,
          });
        } catch (e) {
          sweet({
            title: "Error",
            text: "Please try again later",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async fetchUsers(context) {
        try {
          let { results } = (await axios.get(`${blueURL}users`)).data;
          if (results) {
            context.commit("setUsers", results);
          }
        } catch (e) {
          sweet({
            title: "Error",
            text: "An error occurred when retrieving users.",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async fetchUser(context, packet) {
        try {
          let { result } = (await axios.get(`${blueURL}users/${packet.id}`)).data;
          if (result) {
            context.commit("setUser", result);
          } else {
            sweet({
              title: "Retrieving a single user",
              text: "User was not found",
              icon: "info",
              timer: 2000,
            });
          }
        } catch (e) {
          sweet({
            title: "Error",
            text: "A user was not found.",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async updateUser(context, packet) {
        try {
          let { msg } = await axios.patch(`${blueURL}users/update/${packet.id}`);
          if (msg) {
            context.dispatch("fetchUsers");
            sweet({
              title: "Update user",
              text: msg,
              icon: "success",
              timer: 2000,
            });
          }
        } catch (e) {
          sweet({
            title: "Error",
            text: "An error occurred when updating a user.",
            icon: "success",
            timer: 2000,
          });
        }
      },
      async deleteUser({ commit, dispatch }, packet) {
        try {
          await axios.delete(`${blueURL}users/delete/${packet.id}`);
          commit("setUsers");
          dispatch("fetchUsers");
          sweet({
            title: "Delete user",
            icon: "success",
            timer: 2000,
          });
        } catch (e) {
          sweet({
            title: "Error",
            text: "An error occurred when deleting a user.",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async login(context, packet) {
        try {
          const { msg, token, result } = (
            await axios.post(`${blueURL}users/login`, packet)
          ).data;
          if (result) {
            context.commit("setUser", { msg, result });
            cookies.set("LegitUser", {
              msg,
              token,
              result,
            });
            AuthenticateUser.applyToken(token);
            sweet({
              title: msg,
              text: `Welcome back,
              ${result?.firstName} ${result?.lastName}`,
              icon: "success",
              timer: 2000,
            });
            router.push({ name: "home" });
          } else {
            sweet({
              title: "info",
              text: msg,
              icon: "info",
              timer: 2000,
            });
          }
        } catch (e) {
          sweet({
            title: "Error",
            text: "Failed to login.",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async fetchProducts(context) {
        try {
          let { results } = (await axios.get(`${blueURL}products`)).data;
          if (results) {
            context.commit("setProducts", results);
          }
        } catch (e) {
          sweet({
            title: "Error",
            text: "An error occurred when retrieving products.",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async fetchProduct(context, packet) {
        try {
          let { result } = (await axios.get(`${blueURL}products/${packet?.id}`))
            .data;
          if (result) {
            context.commit("setProduct", result);
          } else {
            sweet({
              title: "Retrieving a single product",
              text: "Product was not found",
              icon: "info",
              timer: 2000,
            });
          }
        } catch (e) {
          sweet({
            title: "Error",
            text: "A product was not found.",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async deleteProduct({ commit, dispatch }, packet) {
        try {
          await axios.delete(`${blueURL}products/delete/${packet.id}`);
          commit("setProducts");
          dispatch("fetchProducts");
          sweet({
            title: "Delete product",
            icon: "success",
            timer: 2000,
          });
        } catch (e) {
          sweet({
            title: "Error",
            text: "An error occurred when deleting a product.",
            icon: "error",
            timer: 2000,
          });
        }
      },
      async addProduct(context, packet) {
        try {
          let {message} = await (
            await axios.post(`${blueURL}products/addProduct`, packet)
          ).data;
          console.log(message);
            context.dispatch("fetchProducts");
          sweet({
            title: "Registration",
            text: message,
            icon: "success",
            timer: 2000,
          });
        } catch (e) {
          sweet({
            title: "Error",
            text: "Please try again later",
            icon: "error",
            timer: 2000,
          });
        }
      },
    },
    modules: {},
  });
