import Vue from "vue";
import Router from "vue-router";
import Reference from "./views/ReferenceSpecific.vue";
import ReferenceBanja from "./views/ReferenceSpecificBanja.vue";
import FrontPage from "./views/FrontPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/reference-vranje",
      name: "reference",
      component: Reference
    },
    {
      path: "/reference-banja",
      name: "reference-banja",
      component: ReferenceBanja
    },
    {
      path: "/",
      name: "FrontPage",
      component: FrontPage
    }
  ],
  mode: "history"
});
