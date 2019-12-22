<template>
  <div class="reference" id="references">
    <b-container class="pl-0 pr-0 pt-4">
      <h2 style="color:white">REFERENCE</h2>
      <b-row>
        <b-col lg="6" md="12" sm="12" @mouseover="hover = true" @mouseleave="hover = false">
          <router-link to="/reference">
            <img
              v-if="hover"
              src="../../assets/reference1_color.jpg"
              style="height: 420px; cursor: pointer;"
            />
            <img v-else src="../../assets/reference1.jpg" />
          </router-link>
        </b-col>
        <b-col lg="6" md="12" sm="12" @mouseover="hover1 = true" @mouseleave="hover1 = false">
          <img
            v-if="hover1"
            src="../../assets/reference2_color.jpg"
            style="height: 420px; cursor: pointer;"
          />
          <img v-else src="../../assets/reference2.jpg" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      hover1: false
    };
  },
  methods: {}
};
</script>

<style scoped>
img {
  height: 420px;
  width: 100%;
}
.reference {
  background: rgb(87, 88, 90);
  height: 520px;
  width: 100%;
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
