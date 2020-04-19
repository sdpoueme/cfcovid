import Vue from "vue";
import Router from "vue-router";
import LandingPage from "@/views/LandingPage.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: LandingPage,
    },
    {
      path: "/test",
      name: "assessment",
    },
    {
      path: "/contact",
      name: "contact",
    },
    {
      path: "/alerts",
      name: "alerts",
    },
  ],
});
