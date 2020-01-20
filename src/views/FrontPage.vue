<template>
  <div>
    <app-header></app-header>
    <b-container class="px-0">
      <div class="ribbon d-sm-flex align-items-end d-none">
        <img src="../assets/logo.png" alt />
      </div>
    </b-container>
    <div class="home-section">
      <b-container id="about-us" fluid></b-container>
    </div>
    <app-about-us id="aboutUsContainer"></app-about-us>
    <div class="about-us container py-5 my-4 d-block d-md-none px-4 px-sm-none" id="about-us-b">
      <h1 style="color: black;" class="m-0 mb-3">O NAMA</h1>
      <div data-v-5565ab09 class="about-us-card-b">
        <div data-v-5565ab09 class="pl-0 pr-3 ml-0 container">
          <p data-v-5565ab09 class="mb-0">
            Naša kompanija je specijalizovana za izvođenje najrazličitijih radova u oblasti građevinarstva. Sa sedištem u Nišu, beležimo postojanje od 2008. godine,
            dok je prvi objekat- stambena zgrada u ulici Stojana Novakovića u Nišu, izveden 2009. godine.
            Ono čime se ponosimo su efkasnost, kvalitet gradnje, iskustvo i poslovan uspeh na čitavoj teritoriji južne i jugoistočne Srbije.
            Takođe nas odlikuje posvećenost i istrajnost, kao i dobri odnosi sa klijentima i saradnicima
          </p>
        </div>
      </div>
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
      msg: "some msg",
      pageWidth: 0,
      aboutUsDiv: 0,
      divToAdd: 0
    };
  },
  created() {
    window.addEventListener("DOMContentLoad", this.handleResize);
    this.handleResize();
  },
  mounted() {
    this.aboutUsDiv = document.querySelector(".container").offsetWidth;
    this.divToAdd = (this.pageWidth - this.aboutUsDiv) / 2;
    console.log(this.pageWidth, this.aboutUsDiv, this.divToAdd);
    let fullContainerWidth = this.aboutUsDiv + this.divToAdd;
    console.log(fullContainerWidth);

    // Get element and set width property
    let aboutUsDiv = document.querySelector(".about-us");
    aboutUsDiv.style.width = `${fullContainerWidth}px`;
  },
  methods: {
    handleResize() {
      this.pageWidth = window.innerWidth;
    }
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
#about-us {
  position: absolute;
  padding-top: 80px;
  bottom: 275px;
}
#about-us-b {
  position: relative;
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
  position: absolute;
  padding: 25px 40px 20px 40px;
  bottom: 0;
}
@media (max-width: 768px) {
  .ribbon {
    height: 30vh;
    margin-left: 15px;
  }
}
@media (max-width: 1500px) {
  .home-section {
    background-position: 0;
  }
}
</style>
