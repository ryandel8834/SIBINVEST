<template>
  <div>
    <div class="home-section">
      <app-header></app-header>
      <b-container>
        <app-home-section></app-home-section>
      </b-container>
    </div>
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
    "app-home-section": Home
  }
};
</script>

<style scoped>
.home-section {
  background: url("./assets/homesection.jpg") no-repeat;
  height: 1050px;
  background-size: cover;
}
</style>
