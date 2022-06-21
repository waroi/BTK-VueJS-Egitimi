import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import { projectAuth } from "../firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/auth/Signup.vue"),
  },
  {
    path: "/playlist/create",
    name: "createplaylist",
    component: () => import("../views/playlists/CreatePlayList.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/playlists/:id",
    name: "playlistdetails",
    component: () => import("../views/playlists/PlaylistDetails.vue"),
    beforeEnter: requireAuth,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
