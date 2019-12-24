<template>
  <div>
    <b-container class="px-0">
      <div class="ribbon d-flex align-items-end">
        <img src="../assets/logo.png" alt="">
      </div>
    </b-container>
    <div class="home-section">
      <app-about-us></app-about-us>
    </div>
    <app-reference-section></app-reference-section>
    <app-project-during></app-project-during>
    <app-contact-us></app-contact-us>
  </div> 
</template>

<script>
import Reference from "../components/reference/Reference";
import ProjectDuring from "../components/projectInDuring/During";
import Contact from "../components/contactUs/Contact";
import About from "../components/aboutUs/About";

export default {
  name: "app",
  data() {
    return {
      msg: "some msg"
    };
  },
  components: {
    "app-reference-section": Reference,
    "app-project-during": ProjectDuring,
    "app-contact-us": Contact,
    "app-about-us": About
  }
};
</script>

<style scoped>
  .home-section {
    background: url("../assets/homesection.jpg") no-repeat;
    height: 100vh;
    background-size: cover;
    background-position: 0 -98px;
  }
  .w-80 {
    width: 80%;
  }
  .ribbon {
    position: absolute;
    top: 0;
    height: 60vh;
    width: 300px;
    background: rgb(87, 88, 90);
  }
  .ribbon img {
    width: 100%;
    padding: 25px 40px 20px 40px;
  }
</style>
