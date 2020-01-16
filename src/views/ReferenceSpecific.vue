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
              src="../assets/reference-slike/min/vranje/gotovo/avranje1_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje2_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje3_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje4_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje5_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje6_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje7_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje8_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje9_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje10_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje11_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/gotovo/avranje12_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <div class="carousel-wrapper" v-click-outside="outsideb">
      <b-carousel
        v-on:keyup.esc="closeModalCarousel"
        ref="myCarouselb"
        id="carousel-2"
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
              src="../assets/reference-slike/min/vranje/u-toku/vranje1_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje2_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje3_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje4_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje5_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje6_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje7_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje8_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje9_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje10_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje11_color-min.jpg"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid carousel-image"
              src="../assets/reference-slike/min/vranje/u-toku/vranje12_color-min.jpg"
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
              <p class="ref-desc mb-0">Završetak gradnje: {{ referenceData.endDate }}</p>
              <p class="ref-desc mb-0">Investitor: {{ referenceData.investor }}</p>
              <p class="ref-desc">Neto površina: {{ referenceData.area }}</p>
            </div>
          </b-col>
        </b-row>
        <b-row class="p-0 m-0">
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="one-1" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="two-2" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="three-3" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="four-4" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="five-5" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="six-6" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="p-0 m-0 mb-5">
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="seven-7" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="eight-8" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="nine-9" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="ten-10" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="eleven-11" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="twelve-12" @click="openImg($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
        </b-row>
        <h1 class="mb-3 mt-25">FAZA IZGRADNJE</h1>
        <b-row class="p-0 m-0">
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="thirteen-1" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="fourteen-2" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="fifteen-3" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="sixteen-4" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="seventeen-5" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="eighteen-6" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="p-0 m-0">
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="nineteen-7" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="twenty-8" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="twentyone-9" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="twentytwo-10" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
          <b-col cols="4" class="p-0 d-flex">
            <div class="ref-img" id="twentythree-11" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
            <div class="ref-img" id="twentyfour-12" @click="openImgb($event)">
              <div class="magnifier-wrapper">
                <img src="../assets/magnifier.png" class="magnifier" alt />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div class="backdrop" id="backdrop"></div>
    </b-container>
  </div>
</template>

<script>
import Referencer from "../services/referencer";
import Banner from "../components/Banner";

export default {
  data() {
    return {
      referenceData: [],
      slide: 0,
      sliding: null,
      isAnimated: false,
      clickOutside: 0,
      clickOutsideb: 0
    };
  },
  components: {
    "app-banner": Banner
  },
  methods: {
    getReferences() {
      Referencer.getReferencesData()
        .then(data => {
          let dataObject = JSON.stringify(data[0]);
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
    isEven(value) {
      if (value % 2 == 0) return true;
      else return false;
    },
    openImg(event) {
      let elementTarget = event.currentTarget.id;
      let elementArr = elementTarget.split("-");
      let elementId = parseInt(elementArr[1]);

      this.setSlide(elementId - 1);
      this.isAnimated = true;

      let carousel = document.getElementById("carousel-1");
      carousel.style.display = "block";
      let overlay = document.getElementById("backdrop");
      overlay.style.display = "block";
      let body = document.body;
      body.style.overflowY = "hidden";
    },
    openImgb(event) {
      let elementTarget = event.currentTarget.id;
      let elementArr = elementTarget.split("-");
      let elementId = parseInt(elementArr[1]);

      this.setSlideb(elementId - 1);
      this.isAnimated = true;

      let carousel = document.getElementById("carousel-2");
      carousel.style.display = "block";
      let overlay = document.getElementById("backdrop");
      overlay.style.display = "block";
      let body = document.body;
      body.style.overflowY = "hidden";
    },
    onSlideStart(slide) {
      this.sliding = false;
      this.isAnimated = false;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    setSlide(index) {
      this.$refs.myCarousel.setSlide(index);
    },
    setSlideb(index) {
      this.$refs.myCarouselb.setSlide(index);
    },
    outside: function(e) {
      this.clickOutside += 1;
      if (this.isEven(this.clickOutside) === false) {
        return false;
      } else {
        let carousel = document.getElementById("carousel-1");
        carousel.style.display = "none";
        let overlay = document.getElementById("backdrop");
        overlay.style.display = "none";
        let body = document.body;
        body.style.overflowY = "scroll";
      }
    },
    outsideb: function(e) {
      this.clickOutsideb += 1;
      if (this.isEven(this.clickOutsideb) === false) {
        return false;
      } else {
        let carousel = document.getElementById("carousel-2");
        carousel.style.display = "none";
        let overlay = document.getElementById("backdrop");
        overlay.style.display = "none";
        let body = document.body;
        body.style.overflowY = "scroll";
      }
    }
  },
  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }
          console.warn(warn);
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener("click", handler);
      },

      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
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
#one-1 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje1-min.jpg");
  width: 50%;
}
#one-1:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje1_color-min.jpg");
}
#two-2 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje2-min.jpg");
}
#two-2:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje2_color-min.jpg");
}
#three-3 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje3-min.jpg");
  width: 50%;
}
#three-3:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje3_color-min.jpg");
}
#four-4 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje4-min.jpg");
}
#four-4:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje4_color-min.jpg");
}
#five-5 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje5-min.jpg");
  width: 50%;
}
#five-5:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje5_color-min.jpg");
}
#six-6 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje6-min.jpg");
}
#six-6:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje6_color-min.jpg");
}
#seven-7 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje7-min.jpg");
  width: 50%;
}
#seven-7:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje7_color-min.jpg");
}
#eight-8 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje8-min.jpg");
}
#eight-8:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje8_color-min.jpg");
}
#nine-9 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje9-min.jpg");
  width: 50%;
}
#nine-9:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje9_color-min.jpg");
}
#ten-10 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10-min.jpg");
}
#ten-10:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje10_color-min.jpg");
}
#eleven-11 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje11-min.jpg");
  width: 50%;
}
#eleven-11:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje11_color-min.jpg");
}
#twelve-12 {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje12-min.jpg");
}
#twelve-12:hover {
  background: url("../assets/reference-slike/min/vranje/gotovo/avranje12_color-min.jpg");
}
#thirteen-1 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje1-min.jpg");
  width: 50%;
}
#thirteen-1:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje1_color-min.jpg");
}
#fourteen-2 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje2-min.jpg");
}
#fourteen-2:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje2_color-min.jpg");
}
#fifteen-3 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje3-min.jpg");
}
#fifteen-3:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje3_color-min.jpg");
}
#sixteen-4 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje4-min.jpg");
  width: 50%;
}
#sixteen-4:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje4_color-min.jpg");
}
#seventeen-5 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje5-min.jpg");
  width: 50%;
}
#seventeen-5:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje5_color-min.jpg");
}
#eighteen-6 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje6-min.jpg");
}
#eighteen-6:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje6_color-min.jpg");
}
#nineteen-7 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje7-min.jpg");
  width: 50%;
}
#nineteen-7:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje7_color-min.jpg");
}
#twenty-8 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje8-min.jpg");
}
#twenty-8:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje8_color-min.jpg");
}
#twentyone-9 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje9-min.jpg");
}
#twentyone-9:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje9_color-min.jpg");
}
#twentytwo-10 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje10-min.jpg");
  width: 50%;
}
#twentytwo-10:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje10_color-min.jpg");
}
#twentythree-11 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje11-min.jpg");
  width: 50%;
}
#twentythree-11:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje11_color-min.jpg");
}
#twentyfour-12 {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje12-min.jpg");
}
#twentyfour-12:hover {
  background: url("../assets/reference-slike/min/vranje/u-toku/vranje12_color-min.jpg");
}
.ref-img:hover .magnifier {
  display: block;
}
.mt-25 {
  margin-top: 70px;
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
.carousel-image {
  z-index: 9999;
}
.carousel-wrapper {
  max-width: 84%;
  margin: auto;
}
#carousel-1,
#carousel-2 {
  display: none;
  width: 60%;
  z-index: 99999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
