import Vue from "vue";
import App from "./App.vue";
import Header from "./components/header/header.vue";

import "./plugins/bootstrap-vue";
import "./styles/index.css";

Vue.component("app-header", Header);

new Vue({
  el: "#app",
  render: h => h(App)
});
