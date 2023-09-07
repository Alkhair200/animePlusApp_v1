import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from 'axios';

export default createStore({
  state: {
    token:null,
    user:null,
    loggedIn: false,

    params:{},
  },

  plugins: [createPersistedState()],
  getters: {

    get_token(state) {
      return state.token;
    },    

    get_user(state) {
      return state.user;
    },  

    get_loggedIn(state) {
      return state.loggedIn;
    },

    get_params(state){
      return state.params;
    },
  },

  mutations: {

    SET_token(state, payload) {
      state.token = payload;
    },    

    SET_user(state ,payload){
      state.user = payload
    },

    SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    },

    SET_params(state, payload) {
      state.params = payload;
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

            resolve(res);
          })
          .catch((err) => {
            
            reject(err);
            // console.log(err)
          });
      });
    },  

    performLoginAction({ commit } ,payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('https://animeeplus.online/api/login',{
            username: payload.email,
            password: payload.password,
            }).then((res)=>{

              resolve(res);
              commit("SET_token", '');
              commit("SET_token", res.data.access_token);
              commit("SET_loggedIn",true);

            }).catch((err)=>{

              reject(err)
              console.log(err)
            })
      });
    },    

    performLogoutAction({ commit ,state}) {   
      const headers = {
          'Authorization': 'Bearer '+ state.token,
      }; 

      return new Promise((resolve, reject) => {
        axios
          .get('https://animeeplus.online/api/user/logout',{headers}            
            ).then((res)=>{

              resolve(res);

              commit("SET_token", '');
              commit("SET_user", '');
              commit("SET_loggedIn",false);

            }).catch((err)=>{

              reject(err)
              console.log(err)
            })
      });
    }, 

    performGetUserAction({ commit ,state},payload) { 

      const headers = {
          'Authorization': 'Bearer '+ payload.token,
      };     

      return new Promise((resolve, reject) => {
        axios
          .get('https://animeeplus.online/api/user',{headers}           
            ).then((res)=>{

              resolve(res);

              commit("SET_user", res.data);

            }).catch((err)=>{

              reject(err)
              console.log(err)
            })
      });
    }, 

  getHomeContents({commit ,state} ,payload){

      return new Promise((resolve, reject) => {
        axios
          .get('https://animeeplus.online/api/media/homecontent/code').then((res)=>{
            let data = [];
            if (payload == "latestEpisodes") {
              data = res.data.latest_episodes
            }else if(payload == "latestEpisodesAnimes"){
              data = res.data.latest_episodes_animes
            }
              resolve(data);

            }).catch((err)=>{

              reject(err)
              console.log(err)
            })
      });
  }, 

  addtofavAction({commit ,state} ,payload){

      const headers = {
          'Authorization': 'Bearer '+ state.token,
      };  

      return new Promise((resolve, reject) => {
        axios
          .post('https://animeeplus.online/api/serie/addWatchType/'+payload.id,{
            id: payload.id,
            watch_type: payload.watch_type,
          },
            {headers}).then((res)=>{
              resolve(res);

            }).catch((err)=>{

              reject(err)
              console.log(err)
            })
      });
  },

  getParams({commit ,state}){

      return new Promise((resolve, reject) => {
        axios
          .get('https://animeeplus.online/api/params').then((res)=>{

              resolve(res);
              commit("SET_params", res.data);

            }).catch((err)=>{

              reject(err)
              console.log(err)
            })
      });
  },  


  }, 
  modules: {},
});
