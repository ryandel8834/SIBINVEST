<template>
  <div class="container p-0 px-4 px-sm-0">
    <div class="about-us d-none d-md-block">
      <h1 style="color:white">O NAMA</h1>
      <div class="about-us-card">
        <b-container class="pl-0 pr-3 ml-0 px-4 px-sm-0">
          <p class="mb-0">
            Naša kompanija je specijalizovana za izvođenje najrazličitijih radova u oblasti građevinarstva. Sa sedištem u Nišu, beležimo postojanje od 2008. godine,
            dok je prvi objekat- stambena zgrada u ulici Stojana Novakovića u Nišu, izveden 2009. godine.
            Ono čime se ponosimo su efkasnost, kvalitet gradnje, iskustvo i poslovan uspeh na čitavoj teritoriji južne i jugoistočne Srbije.
            Takođe nas odlikuje posvećenost i istrajnost, kao i dobri odnosi sa klijentima i saradnicima
          </p>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  letter-spacing: 1px;
  font-weight: normal;
}
.about-us {
  position: absolute;
  bottom: 60px;
  padding-top: 80px;
  /* width: 100%; */
}
.about-us-card {
  height: auto;
  background: rgb(109, 110, 111, 0.6);
  padding: 15px;
}
.about-us-card p {
  color: white;
  line-height: 1.2;
  letter-spacing: 1px;
}
.about-us-card-b {
  height: auto;
  background: white;
}
.about-us-card-b p {
  color: black;
  line-height: 1.5;
  letter-spacing: 1px;
}
@media (max-width: 991px) {
  .about-us {
    top: 54%;
  }
}
</style>