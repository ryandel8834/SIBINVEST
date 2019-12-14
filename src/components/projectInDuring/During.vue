<template>
  <b-container class="pt-4" style="height: 370px;">
    <h2 style="color: black; font-weight: bold;">PROJEKTI U TOKU</h2>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <img src="../../assets/during1.jpg" />
      </b-col>
      <b-col cols="4">
        <a
          data-target="#modalIMG"
          data-toggle="modal"
          href="#"
          class="color-gray-darker td-hover-none"
        >
          <div class>
            <img
              alt="Card image cap"
              class="card-img-top"
              src="../../assets/during2.jpg"
              style="width:333px;"
            />
          </div>
        </a>
      </b-col>
      <b-col cols="4">
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
  height: 250px;
}
</style>