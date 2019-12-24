<template>
  <div class="banner">
      <h2>
          {{pageTitle}}
      </h2>
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
}
</script>

<style scoped>
    .banner {
        margin-bottom: 200px;
        background: #000;
        position: relative;
        color: #fff;
        height: 100px;
        width: 200%;
        margin-left: auto;
        margin-top: 200px;
        font-family: 'Bebas Neue', cursive;
    }
    h2 {
        position: absolute;
        bottom: -19px;
        font-size: 35px;
        left: 7px;
    }
</style>