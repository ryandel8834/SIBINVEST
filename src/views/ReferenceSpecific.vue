<template>
  <b-container class="px-0" id="reference-specific">
    <b-row class="ref-info-row mb-3">
      <b-col cols="5" class="px-0 mt-5 pl-4">
        <h1 class="mb-3 mt-4">{{referenceData[0].category}}</h1>
        <div>
          <p class="ref-desc">
            {{referenceData[0].desc}}
          </p>
        </div>
        <div>
          <p class="ref-desc mb-0">Završetak gradnje: {{referenceData[0].endDate}}</p>
          <p class="ref-desc mb-0">Investitor: {{referenceData[0].investor}}</p>
          <p class="ref-desc">Neto površina: {{referenceData[0].area}}</p>
        </div>
      </b-col>
      <b-col cols="7">
        <app-banner :pageTitle=referenceData[0].name></app-banner>
      </b-col>
    </b-row>
    <b-row class="p-0 m-0">
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="one"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
        <div class="ref-img" id="two"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="three"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
        <div class="ref-img" id="four"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="five"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
        <div class="ref-img" id="six"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
      </b-col>
    </b-row>
    <b-row class="p-0 m-0">
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="seven"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
        <div class="ref-img" id="eight"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="nine"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
        <div class="ref-img" id="ten"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
      </b-col>
      <b-col cols="4" class="p-0 d-flex">
        <div class="ref-img" id="eleven"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
        <div class="ref-img" id="twelve"><div class="magnifier-wrapper"><img src="../assets/magnifier.png" class="magnifier" alt=""></div></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Referencer from '../services/referencer';
import Banner from '../components/Banner';

export default {
  data() {
    return {
      referenceData: []
    }
  },
  components: {
    'app-banner': Banner
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
                picColorSet: reference.projectPicColorSet,
              }
            );
          });
        })
        .catch(e => console.log(e));
    }
  },
  created() {
    this.getReferences();
  },
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
  transition: .3s;
}
.ref-img {
  width: 100%;
  height: 180px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  transition: .3s;
  cursor: pointer;
  position: relative;
}
#one {
  background: url("../assets/reference-slike/min/vranje1_color-min.jpg");
  width: 50%;
}
#two {
  background: url("../assets/reference-slike/min/vranje2_color-min.jpg");
}
#three {
  background: url("../assets/reference-slike/min/vranje3_color-min.jpg");
  width: 50%;
}
#four {
  background: url("../assets/reference-slike/min/vranje4_color-min.jpg");
}
#five {
  background: url("../assets/reference-slike/min/vranje5_color-min.jpg");
  width: 50%;
}
#six {
  background: url("../assets/reference-slike/min/vranje6_color-min.jpg");
}
#seven {
  background: url("../assets/reference-slike/min/vranje7_color-min.jpg");
  width: 50%;
}
#eight {
  background: url("../assets/reference-slike/min/vranje8_color-min.jpg");
}
#nine {
  background: url("../assets/reference-slike/min/vranje9_color-min.jpg");
  width: 50%;
}
#ten {
  background: url("../assets/reference-slike/min/vranje10_color-min.jpg");
}
#eleven {
  background: url("../assets/reference-slike/min/vranje10_color-min.jpg");
  width: 50%;
}
#twelve {
  background: url("../assets/reference-slike/min/vranje10_color-min.jpg");
}
#reference-specific {
  height: 90vh;
}
#one:hover, #three:hover, #five:hover, #seven:hover, #nine:hover, #eleven:hover {
  width: 150% !important;
}
.ref-img:hover .magnifier-wrapper {
  background-color: rgba(255, 255, 255, .3);
}
.ref-img:hover .magnifier{
  display: block;
}
</style>