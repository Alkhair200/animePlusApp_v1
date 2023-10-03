import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Profile from "../views/Profile.vue"
import Season from "../views/Season.vue"
import Fav from "../views/Fav.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Reset from "../views/Reset.vue"

import UpdateProfile from "../views/UpdateProfile.vue"
import LatestEpisode from "../views/LatestEpisode.vue"
import LatestSeries from "../views/LatestSeries.vue"
import latestEpisodesAnimes from "../views/latestEpisodesAnimes.vue"
import PopularCasters from "../views/PopularCasters.vue"
import LatestMovie from "../views/LatestMovie.vue"
import Popular from "../views/Popular.vue"
import AllPopular from "../views/AllPopular.vue"
import Search from "../views/Search.vue"




import LatestAnim from "../views/LatestAnim.vue"
import Anime from "../views/Anime.vue"
import EpisodeReleaseDates from "../views/EpisodeReleaseDates.vue"
import VideoPlayer from "../views/VideoPlayer.vue"
import store from "../store"



const routes = [
  {
    path: "/login",
    name: "تسجيل الدخول",
    component: Login,
    meta:{title:"تسجيل الدخول",
    guest:true}
  },

  {
    path: "/reset-password",
    name: "إعادة ظبط كلةه المرور",
    component: ResetPassword,
    meta:{title:"إعادة ظبط كلةه المرور",guest:true},
  },  

  {
    path: "/reset",
    name: "reset",
    component: Reset,
    meta:{title:"reset",guest:true},
  },   

  {
    path: "/",
    name: "الرئيسيه",
    component: IndexView,
    meta:{title:"الرئيسيه"},
  },

    {
    path: "/search",
    name: "البحث",
    component: Search,
    meta:{title:"البحث"},
  },


  {
    path: "/popular",
    name: "الشخصيات",
    component: Popular,
    meta:{title:"الشخصيات"},
  },

    {
    path: "/all-popular",
    name: "كل الشخصيات",
    component: AllPopular,
    meta:{title:"كل الشخصيات"},
  },


  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta:{title:"بروفايل"},
  },

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
    path: "/latest",
    name: "latest",
    component: LatestEpisode,
    meta:{title:"latest episode"},
  },

    {
    path: "/popular-casters",
    name: "popular-casters",
    component: PopularCasters,
    meta:{title:"popular casters"},
  },

  {
    path: "/latest-movie",
    name: "latest-movie",
    component: LatestMovie,
    meta:{title:"latest movie"},
  },

      {
    path: "/anime",
    name: "anime",
    component: Anime,
    meta:{title:"anime"},
  },


  // 
    {
    path: "/latest-anime",
    name: "episode-episode",
    component: LatestAnim,
    meta:{title:"latest anime"},
  },


    {
    path: "/latest-series",
    name: "episode-series",
    component: LatestSeries,
    meta:{title:"latest series"},
  },

  // 
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
    {
    path: "/play",
    name: "play",
    component: VideoPlayer,
    meta:{title:"play"},    
  },


  // 





  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});


router.beforeEach((to, from, next) => {
   // window.scrollTo(0,0)
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
