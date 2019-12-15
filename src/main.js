import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Header from "./components/header/header.vue";

import "./plugins/bootstrap-vue";
import "./styles/index.css";

Vue.component("app-header", Header);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
