<template>
  <div>
    <div class="home-section">
      <app-header></app-header>
      <app-home-section class="w-80 float-right"></app-home-section>
    </div>
    <app-reference-section></app-reference-section>
    <app-project-during></app-project-during>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer.vue";
import Home from "./components/homesection/Home";
import Reference from "./components/reference/Reference";
import ProjectDuring from "./components/projectInDuring/During";

export default {
  name: "app",
  data() {
    return {
      msg: "some msg"
    };
  },
  components: {
    "app-footer": Footer,
    "app-home-section": Home,
    "app-reference-section": Reference,
    "app-project-during": ProjectDuring
  }
};
</script>

<style scoped>
.home-section {
  background: url("./assets/homesection.jpg") no-repeat;
  height: 1050px;
  background-size: cover;
}
.w-80 {
  width: 80%;
}
</style>
