import Vue from "vue";
import Router from "vue-router";
import Reference from "./views/ReferenceSpecific.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/reference",
      name: "reference",
      component: Reference
    }
  ],
  mode: "history"
});
