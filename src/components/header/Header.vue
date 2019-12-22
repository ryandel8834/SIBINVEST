<template>
 <b-container class="p-0">
  <b-navbar class="navbar p-0" toggleable="lg" type="dark" variant>
    <!-- Right aligned nav items -->
  <div class="ribbon d-flex align-items-end">
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
  position: relative;
  top: 0;
  height: 90vh;
  width: 300px;
  background: rgb(87, 88, 90);
}
.ribbon img {
  width: 100%;
  padding: 25px 40px;
}
/* Media query */
@media (max-width: 991px) {


}
</style>
