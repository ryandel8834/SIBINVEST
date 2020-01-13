<template>
  <div class="reference" id="references">
    <b-container class="pl-0 pr-0 pt-4 px-4 px-sm-0">
      <h1 style="color:white">REFERENCE</h1>
      <b-row class="pb-5 pb-lg-0">
        <b-col lg="6" md="12" sm="12">
          <router-link to="/reference-vranje">
            <div id="first" class="reference-wrapper">
             <span class="centered">NARODNO POZORIŠTE U VRANJU</span>
             <span class="rotated october">Oktobar 2019</span>
            </div>
          </router-link>
        </b-col>
        <b-col lg="6" md="12" sm="12" class="pt-5 pt-lg-0">
          <router-link to="/reference-banja">
            <div id="second" class="reference-wrapper">
              <span class="centered">Ribarska Banja</span>
              <span class="rotated">Maj 2019</span>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style scoped>
  h1 {
    font-weight: normal;
    letter-spacing: 2px;
  }
  img {
    height: 420px;
    width: 100%;
  }
  .reference {
    background: rgb(87, 88, 90);
    height: 580px;
    width: 100%;
  }
  #references {
    padding-top: 45px;
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
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-57%, -100%);
    text-shadow: 0 0 4px rgba(0, 0, 0);
    margin-bottom: 100px;
    font-size: 26px;
    font-family: 'Bebas Neue', cursive;
  }
  .rotated {
    transform: rotate(270deg);
    bottom: 45px;
    left: -20px;
    font-size: 18px;
  }
  .rotated.october {
    bottom: 60px;
    left: -35px;
  }
  #first {
    background: url(../../assets/reference1.jpg);
    height: 420px;
    background-size: cover;
  }
  #first:hover {
    background: url(../../assets/reference1_color.jpg);
    background-size: cover;
  }
  #first:hover .centered {
    display: block;
  }
  #first:hover .rotated {
    display: none;
  }
  #second {
    background: url(../../assets/reference-slike/min/banja/banja1-min.jpg);
    height: 420px;
    background-size: cover;
  }
  #second:hover {
    background: url(../../assets/reference-slike/min/banja/banja1_color-min.jpg);
    background-size: cover;
  }
  #second:hover .centered {
    display: block;
  }
  #second:hover .rotated {
    display: none;
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
