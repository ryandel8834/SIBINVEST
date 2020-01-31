<template>
  <b-container class="p-0">
    <b-navbar
      class="navbar py-3 p-lg-0 sticky-header"
      id="navbar-b-id"
      toggleable="lg"
      type="dark"
      fixed="top"
    >
      <b-container class="px-0 nav-border">
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

        <b-navbar-toggle target="nav-collapse">
          <i class="nav-icon">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </i>
        </b-navbar-toggle>

        <!-- Right aligned nav items -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item text="Lang" right>
              <router-link to="/">početna</router-link>
            </b-nav-item>
            <b-nav-item text="Lang" right>
              <router-link to="/#about-us">o nama</router-link>
            </b-nav-item>
            <b-nav-item text="Lang" right>
              <router-link to="/#references">reference</router-link>
            </b-nav-item>
            <b-nav-item text="Lang" right>
              <router-link to="/#projects-in-progress">projekti u toku</router-link>
            </b-nav-item>
            <b-nav-item text="Lang" right>
              <router-link to="/#contact-us">kontakt</router-link>
            </b-nav-item>
            <b-nav-form class="d-lg-none d-block">
              <autocomplete
                class="d-block d-lg-none"
                @submit="goToSpecificPage"
                size="sm"
                :search="search"
                placeholder="Pretrazi"
                :get-result-value="getResultValue"
              ></autocomplete>
              <b-button size="sm" class="my-2 my-sm-0 search-btn" type="submit">
                <i class="nav-icon">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </i>
              </b-button>
            </b-nav-form>
            <b-nav-item right>
              <i class="nav-icon d-none d-lg-block">
                <font-awesome-icon :icon="['fas', 'search']" />
              </i>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <autocomplete
          @submit="goToSpecificPage"
          size="sm"
          class="mr-sm-2 search-bar d-none d-lg-block"
          :search="search"
          placeholder="Pretrazi"
          :get-result-value="getResultValue"
        ></autocomplete>
      </b-container>
    </b-navbar>
  </b-container>
</template>

<script>
import Referencer from "../../services/referencer";
import Mocks from "../../mocks.js";
export default {
  data() {
    return {
      isNav: false,
      logoName: "logo1.jpg",
      isSearchShown: false,
      routes: [],
      paths: []
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
    getReferences() {
      Referencer.getReferencesName()
        .then(data => {
          let dataObject = JSON.stringify(data);
          let parseObj = JSON.parse(dataObject);

          this.routes = {
            name: parseObj.name,
            path: parseObj.path
          };
          console.log(this.routes);
        })
        .catch(e => console.log(e));
    },
    search(input) {
      this.routes = Mocks.searchRoutes;
      if (input.length < 3) {
        return [];
      }
      return this.routes.filter(route => {
        return route.name.toLowerCase().startsWith(input.toLowerCase());
      });
    },
    getResultValue(result) {
      return result.name;
    },
    goToSpecificPage(result) {
      console.log(result.name, result.path);
      window.open(`http://sibinvestdoo.com${result.path}`, "_self");
    }
  },
  created() {
    this.getReferences();
  }
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
  height: 80px;
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
  color: white;
  margin-top: 3px;
}
.navbar.sticky-header .nav-icon {
  color: black;
}
.search-btn {
  background: transparent !important;
  border: none !important;
  color: black !important;
}
.nav-border {
  position: relative;
}
.search-bar {
  display: block;
  max-width: 200px;
  max-height: 25px;
  position: absolute;
  bottom: 0px;
  right: 0;
}
.search-btn {
  background: transparent !important;
  border: none !important;
  color: black !important;
}
.navbar-toggler:focus {
  outline: none;
}
#nav-collapse {
  padding-bottom: 15px;
}
.navbar-toggler .nav-icon {
  font-size: 26px;
}
/* Media query */
@media (max-width: 991px) {
  .navbar {
    height: auto !important;
    background-color: rgb(87, 88, 90);
  }
}
@media (max-width: 576px) {
  .form-control {
    width: auto !important;
  }
}
</style>
