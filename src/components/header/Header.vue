<template>
 <b-container>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant>
    <!-- Right aligned nav items -->
  <div class="ribbon">
    <img src="../../assets/logo.png" alt="">
  </div>
    <b-navbar-nav class="ml-auto sticky-top" hidden-xs>
      <b-nav-item text="Lang" right> <router-link to="/"> pocetna</router-link> </b-nav-item>
      <b-nav-item text="Lang" right href="#about-us">o nama</b-nav-item>
      <b-nav-item text="Lang" right> <router-link to="/reference"> reference </router-link> </b-nav-item>
      <b-nav-item text="Lang" right href="#projects-in-progress">projekti u toku</b-nav-item>
      <b-nav-item text="Lang" right> <router-link to="/#contact-us" href="#contact-us"> kontakt </router-link> </b-nav-item>
      <b-nav-item text="Lang" right>search</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
 </b-container>
</template>

<script>
export default {
  data() {
    return {
      isNav: false
    };
  }
};
</script>

<style scoped>
.navbar {
  height: 100px;
  width: 100%;
  background-color: transparent;
  position: relative;
}
.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link a {
  color: white;
  font-size: 20px;
}
.sticky-top {
  top: 20px;
}
.ribbon {
  position: absolute;
  top: 0;
  left: 9%;
  height: 56vh;
  width: 300px;
  background: rgb(87, 88, 90);
}
.ribbon img {
  width: 100%;
  margin-top: 22vh;
  padding: 6vh;
}
/* Media query */
@media (max-width: 991px) {


}
</style>
