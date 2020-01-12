<template>
 <b-container class="p-0">
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
        <b-nav-item text="Lang" right> <router-link to="/"> početna</router-link> </b-nav-item>
        <b-nav-item text="Lang" right href="#about-us">o nama</b-nav-item>
        <b-nav-item text="Lang" right href="#references" v-on:click="toggleNavbar"> reference </b-nav-item>
        <b-nav-item text="Lang" right href="#projects-in-progress">projekti u toku</b-nav-item>
        <b-nav-item text="Lang" right href="#contact-us"> kontakt </b-nav-item>
        <b-nav-item text="Lang" right><i class="nav-icon"><font-awesome-icon :icon="['fas', 'search']"/></i></b-nav-item>
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
      logoName: "",
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
      if (this.$route.path !== "/reference-vranje" && this.$route.path !== "/reference-banja" && this.$route.path !=="/progress-zitoradja" && this.$route.path !=="/progress-svrljig") {
        let header = document.querySelector(".navbar");
        let scrollHeight = Number;
        scrollHeight = ((window.innerHeight * 60) / 100) - 70;
        if(window.scrollY > scrollHeight) {
          header.classList.add("sticky-header");
          this.logoName = "logo1.jpg";
        } else if (window.scrollY < scrollHeight) {
          header.classList.remove("sticky-header");
          this.logoName = "";
        }
      }
    },
  },

  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    if (this.$route.path === "/reference-vranje" || this.$route.path === "/reference-banja" || this.$route.path ==="/progress-zitoradja" || this.$route.path ==="/progress-svrljig") {
      let header = document.querySelector(".navbar");
      header.classList.add("sticky-header");
      this.logoName = "logo1.jpg";
    } else {
      header.classList.remove("sticky-header");
      this.logoName = "";
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    if (this.$route.path === "/reference-vranje" || this.$route.path === "/reference-banja" || this.$route.path ==="/progress-zitoradja" || this.$route.path ==="/progress-svrljig") {
      let header = document.querySelector(".navbar");
      header.classList.add("sticky-header");
      this.logoName = "logo1.jpg";
    } else {
      header.classList.remove("sticky-header");
      this.logoName = "";
    }
  },
};
</script>

<style scoped>
.navbar {
  height: 100px;
  width: 100%;
  background-color: transparent;
  -o-transition: 0.4s ease, opacity 0.3s ease;
  transition: 0.4s ease, opacity 0.3s ease;
}
.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link a {
  color: white;
  font-size: 20px;
  font-weight: 500;
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link a:hover {
  text-decoration: none;
}
.navbar.sticky-header {
  height: 70px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid #000;
}
.navbar.sticky-header .navbar-nav .nav-link,
.navbar.sticky-header .navbar-nav .nav-link a {
  color: black !important;
}
.nav-icon {
  font-size: 16px;
}
/* Media query */
@media (max-width: 991px) {


}
</style>
