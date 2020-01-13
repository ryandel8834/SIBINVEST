<template>
  <div id="projects-in-progress">
    <b-container class="durring-section px-4 px-sm-0">
      <h1 style="color: black;" class="pt-4 pt-lg-0 mb-4 mb-lg-2">PROJEKTI U TOKU</h1>
      <b-row class="justify-content-center px-0">
        <b-col lg="6" sm="12">
          <router-link to="/progress-svrljig">
            <div id="one" class="project-wrapper">
              <span class="centered" id="svrljig">Predškolsko Svrljig</span>
              <span class="rotated" id="avgust">Avgust 2020</span>
            </div>
          </router-link>
        </b-col>
        <b-col lg="6" sm="12" class="pt-5 pt-lg-0">
          <router-link to="/progress-zitoradja">
            <div id="two" class="project-wrapper">
              <span class="centered" id="zitoradje">Kupališni Kompleks Zitoradja</span>
              <span class="rotated" id="twenty">Jun 2020</span>
            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
.project-wrapper {
  position: relative;
}
.project-wrapper span {
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
  font-family: "Bebas Neue", cursive;
}
.rotated {
  transform: rotate(270deg);
  bottom: 45px;
  left: -20px;
  font-size: 18px;
}
#zitoradje {
  justify-content: center;
  width: 100%;
  margin-left: 45px; 
}
#svrljig {
  justify-content: center;
  width: 100%;
  margin-left: 30px;
}
#avgust {
  bottom: 60px;
  left: -40px;
}
#one:hover .centered {
  display: flex;
}
#one:hover .rotated {
  display: none;
}
#two:hover .centered {
  display: flex;
}
#two:hover .rotated {
  display: none;
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