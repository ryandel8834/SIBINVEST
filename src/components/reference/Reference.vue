<template>
  <div class="reference" id="references">
    <b-container class="pl-0 pr-0 pt-4">
      <h2 style="color:white">REFERENCE</h2>
      <b-row>
        <b-col lg="6" md="12" sm="12" @mouseover="hover = true" @mouseleave="hover = false">
          <router-link to="/reference">
            <div v-if="hover" class="reference-wrapper">
             <img src="../../assets/reference1_color.jpg" style="height: 420px; cursor: pointer;"/>
             <span class="centered">NARODNO POZORIŠTE U VRANJU</span>
            </div>
            <div v-else class="reference-wrapper">
              <img src="../../assets/reference1.jpg" />
              <span class="rotated">oktobar 2019</span>
            </div>
          </router-link>
        </b-col>
        <b-col lg="6" md="12" sm="12" @mouseover="hover1 = true" @mouseleave="hover1 = false">
          <div v-if="hover1" class="reference-wrapper">
            <img src="../../assets/reference3_color.jpg" style="height: 420px; cursor: pointer;"/>
            <span class="centered">NESTO DRUGO</span>
          </div>
          <div v-else class="reference-wrapper">
            <img src="../../assets/reference3.jpg" />
            <span class="rotated">maj 2019</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      hover1: false
    };
  },
  methods: {}
};
</script>

<style scoped>
  img {
    height: 420px;
    width: 100%;
  }
  .reference {
    background: rgb(87, 88, 90);
    height: 520px;
    width: 100%;
  }
  .reference-wrapper {
    position: relative;
  }
  .reference-wrapper span {
    position: absolute;
    letter-spacing: 1px;
    color: white;
  }
  .centered {
      top: 50%;
      left: 50%;
      transform: translate(-57%, -100%);
      margin-bottom: 100px;
      font-size: 26px;
  }
  .rotated {
    transform: rotate(270deg);
    bottom: 45px;
    left: -20px;
    font-size: 18px;
  }
  @media (max-width: 991px) {
    .reference {
      height: auto;
    }
    img {
      padding: 3%;
    }
  }
</style>
