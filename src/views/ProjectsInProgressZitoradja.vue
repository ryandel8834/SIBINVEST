<template>
  <b-container class="px-0" id="reference-specific">
    <b-row class="ref-info-row mb-3">
      <b-col cols="5" class="px-0 mt-5 pl-4">
        <h1 class="mb-3 mt-4">{{ referenceData[2].category }}</h1>
        <div>
          <p class="ref-desc">
            {{ referenceData[2].desc }}
          </p>
        </div>
        <div>
          <p class="ref-desc mb-0">
            Završetak gradnje: {{ referenceData[2].endDate }}
          </p>
          <p class="ref-desc mb-0">
            Investitor: {{ referenceData[2].investor }}
          </p>
          <p class="ref-desc">Bruto površina izgrađenih objekata na parceli: {{ referenceData[2].area }}</p>
        </div>
      </b-col>
      <b-col cols="7">
        <app-banner :pageTitle="referenceData[2].name"></app-banner>
      </b-col>
    </b-row>
    <div class="d-flex">
      <div class="ref-img" id="one">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="two">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="three">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="four">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="ref-img" id="five">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="six">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="seven">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="eight">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="nine">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="ref-img" id="ten">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt="" />
          </div>
      </div>
      <div class="ref-img" id="eleven">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt="" />
        </div>
      </div>
      <div class="ref-img" id="twelve">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt="" />
        </div>
      </div>
      <div class="ref-img" id="thirteen">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt="" />
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="left-div">
        <div class="d-flex">
          <div class="ref-img" id="fourteen">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt="" />
            </div>
          </div>
          <div class="ref-img" id="fifteen">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt="" />
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="ref-img" id="sixteen">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt="" />
            </div>
          </div>
          <div class="ref-img" id="seventeen">
            <div class="magnifier-wrapper">
              <img src="../assets/magnifier.png" class="magnifier" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="ref-img" id="eighteen">
        <div class="magnifier-wrapper">
          <img src="../assets/magnifier.png" class="magnifier" alt="" />
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
    </carousel> -->
    <div class="backdrop"></div>
  </b-container>
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
          this.referenceData = data.map(reference => {
            return Object.assign(
              {},
              {
                category: reference.projectCategory,
                name: reference.projectName,
                desc: reference.projectDescription,
                endDate: reference.completionDate,
                investor: reference.projectInvestor,
                area: reference.netoArea,
                picSet: reference.projectPicSet,
                picColorSet: reference.projectPicColorSet
              }
            );
          });
        })
        .catch(e => console.log(e));
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
  width: 25%;
  height: 180px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  cursor: pointer;
  position: relative;
  transition: .4s;
}
.arrow-left {
  color: black;
  font-size: 30px;
}
#one {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja1-min.jpg");
}
#one:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja1_color-min.jpg");
}
#two {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja2-min.jpg");
}
#two:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja2_color-min.jpg");
}
#three {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja3-min.jpg");
}
#three:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja3_color-min.jpg");
}
#four {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja4-min.jpg");
}
#four:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja4_color-min.jpg");
}
#five {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja5-min.jpg");
}
#five:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja5_color-min.jpg");
}
#six {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja6-min.jpg");
}
#six:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja6_color-min.jpg");
}
#seven {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja7-min.jpg");
  width: 12.5%;
}
#seven:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja7_color-min.jpg");
}
#eight {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja8-min.jpg");
}
#eight:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja8_color-min.jpg");
}
#nine {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja9-min.jpg");
  width: 12.5%;
}
#nine:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja9_color-min.jpg");
}
#ten {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja10-min.jpg");
}
#ten:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja10_color-min.jpg");
}
#eleven {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja11-min.jpg");
}
#eleven:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja11_color-min.jpg");
}
#twelve {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja12-min.jpg");
}
#twelve:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja12_color-min.jpg");
}
#thirteen {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja13-min.jpg");
}
#thirteen:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja13_color-min.jpg");
}
#fourteen {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja14-min.jpg");
  width: 50%;
}
#fourteen:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja14_color-min.jpg");
}
#fifteen {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja15-min.jpg");
  width: 50%;
}
#fifteen:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja15_color-min.jpg");
}
#sixteen {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja16-min.jpg");
  width: 50%;
}
#sixteen:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja16_color-min.jpg");
}
#seventeen {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja17-min.jpg");
  width: 50%;
}
#seventeen:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja17_color-min.jpg");
}
#eighteen {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja18-min.jpg");
  width: 50%;
  height: 360px;
}
#eighteen:hover {
  background: url("../assets/reference-slike/min/zitoradja/zitoradja18_color-min.jpg");
}
.ref-img:hover .magnifier {
  display: block;
}
.ref-img.focused:hover .magnifier {
  display: none;
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
  background: rgba(0,0,0,.6);
  z-index: 9999;
}
.left-div {
  height: 360px;
  width: 50%;
}
.focused {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99999;
  background-size: contain!important;
  width: 97% !important;
  height: 90% !important;
  transform: translate(-50%, -50%);
}
</style>
