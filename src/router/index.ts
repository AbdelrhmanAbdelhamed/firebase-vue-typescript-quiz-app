import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import FourOhFour from "@/views/404.vue";
import UserModule from "@/store/modules/user";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (UserModule.loggedIn) {
        next({
          path: "/"
        });
      } else {
        next();
      }
    }
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/Create.vue")
  },
  {
    path: "/quiz/:id",
    name: "Quiz",
    component: () => import("@/views/Quiz.vue")
  },
  {
    path: "*",
    name: "404",
    component: FourOhFour
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) return savedPosition;
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});

export default router;
