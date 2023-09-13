import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Profile from "../views/Profile.vue"
import Season from "../views/Season.vue"
import Fav from "../views/Fav.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import UpdateProfile from "../views/UpdateProfile.vue"
import LatestEpisode from "../views/LatestEpisode.vue"
import latestEpisodesAnimes from "../views/latestEpisodesAnimes.vue"
import EpisodeReleaseDates from "../views/EpisodeReleaseDates.vue"
import store from "../store"



const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{title:"login",
    guest:true}
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
    path: "/season",
    name: "season",
    component: Season,
    meta:{title:"season"},
  },
  {
    path: "/fav",
    name: "favorite",
    component: Fav,
    meta:{title:"favorite"},    
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta:{title:"register"},
  },
    
  {
    path: "/latest-episode",
    name: "episode-release",
    component: LatestEpisode,
    meta:{title:"latest episode"},
  },
    {
    path: "/latest-episodes-animes",
    name: "latest-episodes-animes",
    component: latestEpisodesAnimes,
    meta:{title:"latest_episodes_animes"},
  },
    {
    path: "/episode-release-dates",
    name: "episode-release-dates",
    component: EpisodeReleaseDates,
    meta:{title:"episode release dates"},
  },





  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.matched.some((record) => record.meta.secure)) {
    if (!store.state.loggedIn) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (!store.state.loggedIn) {
      next();
    } else {
      next({
        path: "/",
      });
    }
  } else {
    next();
  }
});

export default router;
