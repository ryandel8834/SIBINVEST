<template>
 <b-container class="p-0">
  <div class="ribbon d-flex align-items-end">
    <img src="../../assets/logo.png" alt="">
  </div>
  <b-navbar class="navbar p-0" toggleable="lg" type="dark" fixed="top" @scroll="handleScroll">
    <b-container class="px-0">
      <b-navbar-brand
        href="/"
        alt="SibInvest Logo"
        :style="{
          backgroundImage: `url(${logoImage})`,
          height: '30px',
          width: '220px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }"
      ></b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" hidden-xs>
        <b-nav-item text="Lang" right> <router-link to="/"> pocetna</router-link> </b-nav-item>
        <b-nav-item text="Lang" right href="#about-us">o nama</b-nav-item>
        <b-nav-item text="Lang" right> <router-link to="/reference"> reference </router-link> </b-nav-item>
        <b-nav-item text="Lang" right href="#projects-in-progress">projekti u toku</b-nav-item>
        <b-nav-item text="Lang" right> <router-link to="/#contact-us" href="#contact-us"> kontakt </router-link> </b-nav-item>
        <b-nav-item text="Lang" right>search</b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
 </b-container>
</template>

<script>
export default {
  data() {
    return {
      isNav: false,
      logoName: ""
    };
  },
  computed: {
    logoImage() {
      if (!this.logoName) {
        return;
      }
      return require(`../../assets/${this.logoName}`);
    }
  },
  methods: {
    handleScroll(event) {
      let header = document.querySelector(".navbar");
      if(window.scrollY > 480) {
        header.classList.add("sticky-header");
        this.logoName = "logo1.jpg";
      } else if (window.scrollY < 480) {
        header.classList.remove("sticky-header");
        this.logoName = "";
      }
    }
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.navbar {
  height: 100px;
  width: 100%;
  background-color: transparent;
  -o-transition: height 0.4s ease, opacity 0.3s ease;
  transition: height 0.4s ease, opacity 0.3s ease;
}
.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link a {
  color: white;
  font-size: 20px;
  letter-spacing: 1px;
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link a:hover {
  text-decoration: none;
}
.sticky-top {
  top: 20px;
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
.navbar.sticky-header {
  height: 70px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #000;
}
.navbar.sticky-header .navbar-nav .nav-link,
.navbar.sticky-header .navbar-nav .nav-link a {
  color: black !important;
}
/* Media query */
@media (max-width: 991px) {


}
</style>
