import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Header from "./components/header/header.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import carousel from "vue-owl-carousel2";

import "./plugins/bootstrap-vue";
import "./styles/index.css";

Vue.component("app-header", Header);
Vue.component("carousel", carousel);

library.add(faUserSecret);
library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
