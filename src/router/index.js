import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Profile from "../views/Profile.vue"
import Season from "../views/Season.vue"
import Fav from "../views/Fav.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import UpdateProfile from "../views/UpdateProfile.vue"


const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{title:"login"},
  },

  {
    path: "/",
    name: "index",
    component: IndexView,
    meta:{title:"index"},
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta:{title:"profile"},
  },,
  {
    path: "/update-profile",
    name: "update-profile",
    component: UpdateProfile,
    meta:{title:"update profile"},
  },
  {
    path: "/season/:id",
    name: "season",
    component: Season,
    meta:{title:"season"},
  },
  {
    path: "/fav",
    name: "fav",
    component: Fav,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta:{title:"register"},
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  next();
})

export default router;
