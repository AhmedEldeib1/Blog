<template>
  <div class="card">
    <h1>Error page</h1>
    <router-link :to="{ name: 'Home' }">Go To Home Page</router-link>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .card {
    text-align: center;
  }
</style>
