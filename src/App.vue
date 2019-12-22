<template>
  <div>
    <div class="home-section">
      <app-header></app-header>
      <app-home-section class="w-80 float-right"></app-home-section>
    </div>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer.vue";
import Home from "./components/homesection/Home";


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
  }
};
</script>

<style scoped>
.home-section {
  background: url("./assets/homesection.jpg") no-repeat;
  height: 100vh;
  background-size: cover;
}
.w-80 {
  width: 80%;
}
</style>
