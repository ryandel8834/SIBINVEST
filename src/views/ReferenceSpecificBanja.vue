<template>
  <div>
    <app-header-b></app-header-b>
    <b-container class="px-0" id="reference-specific" fluid>
    <app-banner :pageTitle="referenceData.name"></app-banner>
    <b-container>
        <b-row class="ref-info-row mb-3">
      <b-col cols="12" lg="5" class="px-0 mt-5 pl-4">
        <h1 class="mb-3 mt-4">{{ referenceData.category }}</h1>
        <div>
          <p class="ref-desc">{{ referenceData.desc }}</p>
        </div>
        <div>
          <p class="ref-desc mb-0">Završetak gradnje: {{ referenceData.endDate }}</p>
          <p class="ref-desc mb-0">Investitor: {{ referenceData.investor }}</p>
          <p class="ref-desc">Neto površina: {{ referenceData.area }}</p>
        </div>
      </b-col>
    </b-row>
    <div class="d-flex">
      <div class="ref-img" id="one">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="two">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="three">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="four">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="five">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="ref-img" id="six">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="seven">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="eight">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="nine">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
      <div class="ref-img" id="ten">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt />
        </div>
      </div>
    </div>
    <!-- <carousel :items="1" loop="false">
      <template slot="prev"><span class="prev"><i class="arrow-left"><font-awesome-icon :icon="['fas', 'chevron-left']"/></i></span></template>
      <img src="../assets/reference-slike/min/banja/banja1_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja2_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja3_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja4_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja5_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja6_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja7_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja8_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja9_color-min.jpg" alt="">
      <img src="../assets/reference-slike/min/banja/banja10_color-min.jpg" alt="">
      <template slot="next"><span class="next"><i class="arrow-right"><font-awesome-icon :icon="['fas', 'chevron-right']"/></i></span></template>
    </carousel>-->
    </b-container>
    <div class="backdrop"></div>
  </b-container>
  </div>
</template>

<script>
import Referencer from "../services/referencer";
import Banner from "../components/Banner";

export default {
  data() {
    return {
      referenceData: []
    };
  },
  components: {
    "app-banner": Banner
  },
  methods: {
    getReferences() {
      Referencer.getReferencesData()
        .then(data => {
          let dataObject = JSON.stringify(data[1]);
          let parseObj = JSON.parse(dataObject);

          this.referenceData = {
            category: parseObj.projectCategory,
            name: parseObj.projectName,
            desc: parseObj.projectDescription,
            endDate: parseObj.completionDate,
            investor: parseObj.projectInvestor,
            area: parseObj.netoArea
          };
        })
        .catch(e => console.log(e));
    },
    openImg(event) {
      let elementTarget = event.currentTarget.id;
      let selectedElement = document.getElementById(elementTarget);
      selectedElement.classList.add("focused");
    }
  },
  created() {
    this.getReferences();
  }
};
</script>

<style scoped>
body {
  height: 100% !important;

  display: flex;
  flex-direction: column;
}
h1 {
  letter-spacing: 1px;
}
.ref-info-row {
  margin-top: 200px;
}
.ref-desc {
  font-size: 15px;
  color: #000;
}
.magnifier-wrapper {
  height: 100%;
  width: 100%;
}
.magnifier {
  display: none;
  height: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}
.ref-img {
  width: 20%;
  height: 180px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  cursor: pointer;
  position: relative;
}
.arrow-left {
  color: black;
  font-size: 30px;
}
#one {
  background: url("../assets/reference-slike/min/banja/banja1-min.jpg");
}
#one:hover {
  background: url("../assets/reference-slike/min/banja/banja1_color-min.jpg");
}
#two {
  background: url("../assets/reference-slike/min/banja/banja2-min.jpg");
}
#two:hover {
  background: url("../assets/reference-slike/min/banja/banja2_color-min.jpg");
}
#three {
  background: url("../assets/reference-slike/min/banja/banja3-min.jpg");
}
#three:hover {
  background: url("../assets/reference-slike/min/banja/banja3_color-min.jpg");
}
#four {
  background: url("../assets/reference-slike/min/banja/banja4-min.jpg");
}
#four:hover {
  background: url("../assets/reference-slike/min/banja/banja4_color-min.jpg");
}
#five {
  background: url("../assets/reference-slike/min/banja/banja5-min.jpg");
}
#five:hover {
  background: url("../assets/reference-slike/min/banja/banja5_color-min.jpg");
}
#six {
  background: url("../assets/reference-slike/min/banja/banja6-min.jpg");
}
#six:hover {
  background: url("../assets/reference-slike/min/banja/banja6_color-min.jpg");
}
#seven {
  background: url("../assets/reference-slike/min/banja/banja7-min.jpg");
}
#seven:hover {
  background: url("../assets/reference-slike/min/banja/banja7_color-min.jpg");
}
#eight {
  background: url("../assets/reference-slike/min/banja/banja8-min.jpg");
}
#eight:hover {
  background: url("../assets/reference-slike/min/banja/banja8_color-min.jpg");
}
#nine {
  background: url("../assets/reference-slike/min/banja/banja9-min.jpg");
}
#nine:hover {
  background: url("../assets/reference-slike/min/banja/banja9_color-min.jpg");
}
#ten {
  background: url("../assets/reference-slike/min/banja/banja10-min.jpg");
}
#ten:hover {
  background: url("../assets/reference-slike/min/banja/banja10_color-min.jpg");
}
.ref-img:hover .magnifier {
  display: block;
}
.owl-prev {
  display: none;
}
.owl-next {
  display: none;
}
.backdrop {
  display: none;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
}
</style>
