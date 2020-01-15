<template>
  <div>
    <app-header-b></app-header-b>
    <div class="carousel-wrapper" v-click-outside="outside">
      <b-carousel
        v-on:keyup.esc="closeModalCarousel"
        ref="myCarousel"
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        indicators
        :no-animation="isAnimated"
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
      >
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig1_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig2_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig3_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig4_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig5_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig6_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig7_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig8_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig9_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/svrljig/svrljig10_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
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
              <p class="ref-desc mb-0">
                Završetak gradnje: {{ referenceData.endDate }}
              </p>
              <p class="ref-desc mb-0">
                Investitor: {{ referenceData.investor }}
              </p>
              <p class="ref-desc">
                Bruto površina izgrađenih objekata na parceli:
                {{ referenceData.area }}
              </p>
            </div>
          </b-col>
        </b-row>
        <div class="d-flex">
          <div class="ref-img" id="one-1">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt />
            </div>
          </div>
          <div class="ref-img" id="two-2">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt />
            </div>
          </div>
          <div class="ref-img" id="three-3">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt />
            </div>
          </div>
          <div class="ref-img" id="four-4">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt />
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="d-flex flex-column w-50">
            <div class="d-flex">
              <div class="ref-img" id="five-5">
                <div class="magnifier-wrapper">
                  <img src="../assets/magnifier.png" class="magnifier" alt />
                </div>
              </div>
              <div class="ref-img" id="six-6">
                <div class="magnifier-wrapper">
                  <img src="../assets/magnifier.png" class="magnifier" alt />
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="ref-img" id="eight-8">
                <div class="magnifier-wrapper">
                  <img src="../assets/magnifier.png" class="magnifier" alt />
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column w-50">
            <div class="d-flex">
              <div class="ref-img" id="seven-7">
                <div class="magnifier-wrapper">
                  <img src="../assets/magnifier.png" class="magnifier" alt />
                </div>
              </div>
            </div>
            <div class="d-flex">
              <div class="ref-img" id="nine-9">
                <div class="magnifier-wrapper">
                  <img src="../assets/magnifier.png" class="magnifier" alt />
                </div>
              </div>
              <div class="ref-img" id="ten-10">
                <div class="magnifier-wrapper">
                  <img src="../assets/magnifier.png" class="magnifier" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
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
          let dataObject = JSON.stringify(data[3]);
          let parseObj = JSON.parse(dataObject);

          this.referenceData = {
            category: parseObj.projectCategory,
            name: parseObj.projectName,
            desc: parseObj.projectDescription,
            endDate: parseObj.completionDate,
            investor: parseObj.projectInvestor,
            area: parseObj.netoArea
          };

          console.log(this.referenceData);
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
  max-width: 315px;
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
  width: 25%;
  height: 210px;
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
  background: url("../assets/reference-slike/min/svrljig/svrljig1-min.jpg");
}
#one:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig1_color-min.jpg");
}
#two {
  background: url("../assets/reference-slike/min/svrljig/svrljig2-min.jpg");
}
#two:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig2_color-min.jpg");
}
#three {
  background: url("../assets/reference-slike/min/svrljig/svrljig3-min.jpg");
}
#three:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig3_color-min.jpg");
}
#four {
  background: url("../assets/reference-slike/min/svrljig/svrljig4-min.jpg");
}
#four:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig4_color-min.jpg");
}
#five {
  background: url("../assets/reference-slike/min/svrljig/svrljig5-min.jpg");
  width: 100%;
}
#five:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig5_color-min.jpg");
}
#six {
  background: url("../assets/reference-slike/min/svrljig/svrljig6-min.jpg");
  width: 100%;
}
#six:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig6_color-min.jpg");
}
#seven {
  background: url("../assets/reference-slike/min/svrljig/svrljig7-min.jpg");
  height: 420px;
  width: 100%;
}
#seven:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig7_color-min.jpg");
}
#eight {
  background: url("../assets/reference-slike/min/svrljig/svrljig8-min.jpg");
  height: 420px;
  width: 100%;
}
#eight:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig8_color-min.jpg");
}
#nine {
  background: url("../assets/reference-slike/min/svrljig/svrljig9-min.jpg");
  width: 100%;
}
#nine:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig9_color-min.jpg");
}
#ten {
  background: url("../assets/reference-slike/min/svrljig/svrljig10-min.jpg");
  width: 100%;
}
#ten:hover {
  background: url("../assets/reference-slike/min/svrljig/svrljig10_color-min.jpg");
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
.left-div {
  height: 420px;
  width: 50%;
}
</style>
