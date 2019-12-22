<template>
  <div>
    <app-header></app-header>
      <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "some msg"
    };
  },
  components: {
    "app-footer": Footer,
  }
};
</script>

<style scoped>

</style>
