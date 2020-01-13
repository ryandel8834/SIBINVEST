<template>
  <div class="banner">
    <h2>{{pageTitle}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.banner {
  background: #000;
  margin-left: 58%;
  position: absolute;
  color: #fff;
  height: 100px;
  width: 42%;
  font-family: "Bebas Neue", cursive;
}
h2 {
  position: absolute;
  bottom: -19px;
  font-size: 35px;
  left: 7px;
  letter-spacing: 1px;
}
@media (max-width: 991px) {
  .banner {
    margin-left: 0;
    width: 100%;
    top: 7vh;
  }
}
</style>