import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Header from "./components/header/header.vue";


import "./plugins/bootstrap-vue";
import "./styles/index.css";

Vue.component("app-header", Header);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
