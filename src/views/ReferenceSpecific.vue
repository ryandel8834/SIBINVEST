<template>
  <b-container>
    <app-banner :pageTitle=referenceData[0].name></app-banner>
  </b-container>
</template>

<script>
import Referencer from '../services/referencer';
import Banner from '../components/Banner';

export default {
  data() {
    return {
      referenceData: []
    }
  },
  components: {
    'app-banner': Banner
  },
  methods: {
    getReferences() {
      Referencer.getReferencesData()
        .then(data => {
          this.referenceData = data.map(reference => {
            return Object.assign(
              {},
              {
                name: reference.projectName,
                desc: reference.projectDescription,
                endDate: reference.completionDate,
                investor: reference.projectInvestor,
                area: reference.netoArea
              }
            );
          });
        })
        .catch(e => console.log(e));
    }
  },
  created() {
    this.getReferences();
  },
};
</script>

<style>
</style>