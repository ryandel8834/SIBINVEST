<template>
  <b-container class="pt-4 durring-section px-0" id="projects-in-progress">
    <h2 style="color: black; font-weight: bold;">PROJEKTI U TOKU</h2>
    <b-row class="justify-content-center px-0">
      <b-col lg="4" sm="12">
        <img src="../../assets/during1.jpg" />
      </b-col>
      <b-col lg="4" sm="12">
        <img alt="Card image cap" class="card-img-top" src="../../assets/during2.jpg" />
      </b-col>
      <b-col lg="4" sm="12">
        <img src="../../assets/during3.jpg" />
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
/* Media query */
@media (max-width: 991px) {
  .durring-section {
    height: auto;
  }
  .row {
    text-align: center;
  }
  .container h2 {
    text-align: center;
  }
  img {
    padding: 2%;
    width: 75%;
  }
}
</style>