<template>
 <div>
   <app-header-b></app-header-b>
    <b-container class="px-0" id="reference-specific">
    <b-row class="ref-info-row mb-3">
      <b-col cols="5" class="px-0 mt-5 pl-4">
        <h1 class="mb-3 mt-4">{{ referenceData[0].category }}</h1>
        <div>
          <p class="ref-desc">{{ referenceData[0].desc }}</p>
        </div>
        <div>
          <p class="ref-desc mb-0">Završetak gradnje: {{ referenceData[0].endDate }}</p>
          <p class="ref-desc mb-0">Investitor: {{ referenceData[0].investor }}</p>
          <p class="ref-desc">Neto površina: {{ referenceData[0].area }}</p>
        </div>
      </b-col>
      <b-col cols="7">
        <app-banner :pageTitle="referenceData[0].name"></app-banner>
      </b-col>
    </b-row>
    <b-row class="p-0 m-0">
      <b-col cols="4" class="p-0 d-flex">
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
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
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
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="five">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="six">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="p-0 m-0 mb-5">
      <b-col cols="4" class="p-0 d-flex">
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
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
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
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="eleven">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="twelve">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
    </b-row>
    <h1 class="mb-3 mt-25">FAZA IZGRADNJE</h1>
    <b-row class="p-0 m-0">
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="thirteen">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="fourteen">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="fifteen">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="sixteen">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="seventeen">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="eighteen">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="p-0 m-0">
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="nineteen">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="twenty">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="twentyone">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="twentytwo">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="twentythree">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
        <div class="ref-img" id="twentyfour">
          <div class="magnifier-wrapper">
            <img src="../assets/magnifier.png" class="magnifier" alt />
          </div>
        </div>
      </b-col>
    </b-row>
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
  width: 100%;
  height: 180px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  transition: 0.3s;
  cursor: pointer;
  position: relative;
}
#one {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje1-min.jpg");
  width: 50%;
}
#one:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje1_color-min.jpg");
}
#two {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje2-min.jpg");
}
#two:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje2_color-min.jpg");
}
#three {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje3-min.jpg");
  width: 50%;
}
#three:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje3_color-min.jpg");
}
#four {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje4-min.jpg");
}
#four:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje4_color-min.jpg");
}
#five {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje5-min.jpg");
  width: 50%;
}
#five:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje5_color-min.jpg");
}
#six {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje6-min.jpg");
}
#six:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje6_color-min.jpg");
}
#seven {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje7-min.jpg");
  width: 50%;
}
#seven:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje7_color-min.jpg");
}
#eight {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje8-min.jpg");
}
#eight:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje8_color-min.jpg");
}
#nine {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje9-min.jpg");
  width: 50%;
}
#nine:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje9_color-min.jpg");
}
#ten {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10-min.jpg");
}
#ten:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10_color-min.jpg");
}
#eleven {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10-min.jpg");
  width: 50%;
}
#eleven:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10_color-min.jpg");
}
#twelve {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10-min.jpg");
}
#twelve:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10_color-min.jpg");
}
#thirteen {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje1-min.jpg");
  width: 50%;
}
#thirteen:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje1_color-min.jpg");
}
#fourteen {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje2-min.jpg");
}
#fourteen:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje2_color-min.jpg");
}
#fifteen {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje3-min.jpg");
}
#fifteen:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje3_color-min.jpg");
}
#sixteen {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje4-min.jpg");
  width: 50%;
}
#sixteen:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje4_color-min.jpg");
}
#seventeen {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje5-min.jpg");
  width: 50%;
}
#seventeen:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje5_color-min.jpg");
}
#eighteen {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje6-min.jpg");
}
#eighteen:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje6_color-min.jpg");
}
#nineteen {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje7-min.jpg");
  width: 50%;
}
#nineteen:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje7_color-min.jpg");
}
#twenty {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje8-min.jpg");
}
#twenty:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje8_color-min.jpg");
}
#twentyone {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje9-min.jpg");
}
#twentyone:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje9_color-min.jpg");
}
#twentytwo {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje10-min.jpg");
  width: 50%;
}
#twentytwo:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje10_color-min.jpg");
}
#twentythree {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje11-min.jpg");
  width: 50%;
}
#twentythree:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje11_color-min.jpg");
}
#twentyfour {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje12-min.jpg");
}
#twentyfour:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje12_color-min.jpg");
}
.ref-img:hover .magnifier {
  display: block;
}
.mt-25 {
  margin-top: 70px;
}
</style>
