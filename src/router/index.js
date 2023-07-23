import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Profile from "../views/Profile.vue"
import Test from "../views/Test.vue"
import Fav from "../views/Fav.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import UpdateProfile from "../views/UpdateProfile.vue"


const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },,
  {
    path: "/update-profile",
    name: "update-profile",
    component: UpdateProfile,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/fav",
    name: "fav",
    component: Fav,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
