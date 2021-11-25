<template>
  <div class="about text-center">
    <h1>This is the article</h1>
    <div class="text-center">
      <div class="card">
        <h1>{{ theInfos[key].title }}</h1>
        <p>{{ theInfos[key].body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["id"],
    data() {
      return {
        key: this.id - 1,
      };
    },
    computed: {
      theInfos() {
        return this.$store.getters.theInfos;
      },
    },
  };
</script>
<style>
  .card h1 {
    background-color: antiquewhite;
    width: fit-content;
    border-radius: 20px;
    margin: 10px auto;
    padding: 10px;
  }
  .card p {
    width: 200px;
    margin: 10px auto;
    padding: 10px;
    background-color: bisque;
  }
</style>
