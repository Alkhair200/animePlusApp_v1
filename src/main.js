import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
// import VueFeather from 'vue-feather';


// import { Bootstrap4Pagination } from 'laravel-vue-pagination';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

createApp(App)
.use(store)
.use(Bootstrap5Pagination)
// .use(VueFeather)
.use(VueAxios, axios)
.use(router)
.mount("#app");
