<template>
  <b-container class="durring-section px-0" id="projects-in-progress">
    <h1 style="color: black;">PROJEKTI U TOKU</h1>
    <b-row class="justify-content-center px-0">
      <b-col lg="6" sm="12">
        <router-link to="/progress-svrljig">
          <div id="one"></div>
        </router-link>
      </b-col>
      <b-col lg="6" sm="12">
        <router-link to="/progress-zitoradja">
          <div id="two"></div>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
.durring-section {
  height: auto;
}
h1 {
  letter-spacing: 1px;
}
#projects-in-progress {
  padding-top: 80px;
}
#one {
  background: url("../../assets/reference-slike/min/svrljig/svrljig8-min.jpg");
  background-size: cover;
  height: 300px;
}
#one:hover {
  background: url("../../assets/reference-slike/min/svrljig/svrljig8_color-min.jpg");
  background-size: cover;
  cursor: pointer;
}
#two {
  background: url("../../assets/reference-slike/min/zitoradja/zitoradja8-min.jpg");
  background-size: cover;
  height: 300px;
}
#two:hover {
  background: url("../../assets/reference-slike/min/zitoradja/zitoradja8_color-min.jpg");
  background-size: cover;
  cursor: pointer;
}

/* Media query */
@media (max-width: 991px) {
  .durring-section {
    height: auto;
  }
  .row {
    text-align: center;
  }
  .container h1 {
    text-align: center;
  }
}
</style>