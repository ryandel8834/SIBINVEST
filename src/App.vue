<template>
  <div>
    <app-home></app-home>
  </div>
</template>

<script>
import homeView from "./views/Home";
import specificView from "./views/ReferenceSpecific";

export default {
  name: "app",
  data() {
    return {
      msg: "some msg"
    };
  },
  components: {
    "app-home": homeView,
    "app-reference": specificView
  }
};
</script>

<style scoped>
.home-section {
  background: url("./assets/homesection.jpg") no-repeat;
  height: 1050px;
  background-size: cover;
}
.w-80 {
  width: 80%;
}
</style>
