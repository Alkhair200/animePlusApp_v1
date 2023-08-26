import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    access_token:null,
  },

  getters: {

    get_access_token(state) {
      return state.access_token;
    },    
  },

  mutations: {

    SET_token(state, payload) {
      state.access_token = payload;
    },    
  },

  actions: {

    performRegisterAction({ commit } ,payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('https://animeeplus.online/api/register',{
            name: payload.name,
            email: payload.email,
            password: payload.password,
          })
          .then((res) => {

            commit("SET_token", res.data.access_token);

            resolve(res);
          })
          .catch((err) => {
            
            // reject(err);
            window.alert(err.message)
          });
      });
    },    
  },
  modules: {},
});
