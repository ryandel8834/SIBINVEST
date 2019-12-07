<template>
  <b-navbar class="navbar" toggleable="lg" type="dark" variant>
    <!-- Right aligned nav items -->
    <b-container class="pl-0">
      <b-navbar-brand href="#">LOGO</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item text="Lang" right>POCETNA</b-nav-item>
          <b-nav-item text="Lang" right>O NAMA</b-nav-item>
          <b-nav-item text="Lang" right>REFERENCE</b-nav-item>
          <b-nav-item text="Lang" right>PROJEKTI U TOKU</b-nav-item>
          <b-nav-item text="Lang" right>KONTAKT</b-nav-item>
          <b-nav-item text="Lang" right>SEARCH</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  opacity: 0.5;
  height: 100px;
  margin: -4%;
  padding: 6%;
}
.navbar-dark .navbar-nav .nav-link {
  color: white;
  font-size: 20px;
}
</style>
