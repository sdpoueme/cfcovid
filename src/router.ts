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
      path: "/faq",
      name: "faq",
    },
    {
      path: "/alerts",
      name: "alerts",
    },
  ],
});
