<template>
  <footer class="page-footer font-small blue pt-4">
    <p class="txt-footer">  all rights reserved </p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.page-footer {
  background: black;
  height: 70px;
  margin-top: 150px;
}
.txt-footer {
  color: white;
  text-align: center;
}
@media (max-width: 768px) {
  .page-footer {
    margin-top: 30px;
  }
}
@media (max-width:992px) {
  .page-footer {
    margin-top: 60px;
  }
}
</style>
