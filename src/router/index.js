import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Profile from "../views/Profile.vue"
import Test from "../views/Test.vue"

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
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
