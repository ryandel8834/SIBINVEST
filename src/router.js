import Vue from "vue";
import Router from "vue-router";
import Reference from "./views/ReferenceSpecific.vue";
import ReferenceBanja from "./views/ReferenceSpecificBanja.vue";
import ProgressZitoradja from "./views/ProjectsInProgressZitoradja.vue";
import ProgressSvrljig from "./views/ProjectsInProgressSvrljig.vue";
import FrontPage from "./views/FrontPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "FrontPage",
      component: FrontPage
    },
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
      path: "/progress-zitoradja",
      name: "progress-zitoradja",
      component: ProgressZitoradja
    },
    {
      path: "/progress-svrljig",
      name: "progress-svrljig",
      component: ProgressSvrljig
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: "history"
});
