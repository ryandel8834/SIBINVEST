<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant>
    <!-- Right aligned nav items -->
    <b-container class="pl-0 pr-0">
      <div class="header-gray-track"></div>
      <b-navbar-nav class="ml-auto sticky-top" hidden-xs>
        <b-nav-item text="Lang" right>POCETNA</b-nav-item>
        <b-nav-item text="Lang" right>O NAMA</b-nav-item>
        <b-nav-item text="Lang" right>REFERENCE</b-nav-item>
        <b-nav-item text="Lang" right>PROJEKTI U TOKU</b-nav-item>
        <b-nav-item text="Lang" right>KONTAKT</b-nav-item>
        <b-nav-item text="Lang" right>search</b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
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
  margin: -4%;
  padding: 6%;
}
.navbar-dark .navbar-nav .nav-link {
  color: white;
  font-size: 20px;
}
.header-gray-track {
  height: 1200px;
  width: 300px;
  background: rgb(87, 88, 90);
}
.sticky-top {
  top: 20px;
}
/* Media query */
@media (max-width: 991px) {
  .navbar-nav,
  .header-gray-track {
    display: none;
  }
}
</style>
