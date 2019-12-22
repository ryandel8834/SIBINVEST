<template>
  <div>
    <app-reference-section></app-reference-section>
    <app-project-during></app-project-during>
    <app-contact-us></app-contact-us>
  </div>
</template>

<script>
import Reference from "../components/reference/Reference";
import ProjectDuring from "../components/projectInDuring/During";
import Contact from "../components/contactUs/Contact";

export default {
  name: "app",
  data() {
    return {
      msg: "some msg"
    };
  },
  components: {
    "app-reference-section": Reference,
    "app-project-during": ProjectDuring,
    "app-contact-us": Contact
  }
};
</script>

<style scoped>

</style>
