import Vue from "vue";
import Router from "vue-router";
import Reference from "./views/ReferenceSpecific.vue";
import FrontPage from "./views/FrontPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/reference",
      name: "reference",
      component: Reference
    },
    {
      path: "/",
      name: "FrontPage",
      component: FrontPage,
    },
  ],
  mode: "history"
});
