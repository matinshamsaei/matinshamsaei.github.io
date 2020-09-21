<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h5>You may Save or Load your Data!</h5>
    <h5>Click on ' End Day ' to begin a New Day...</h5>
    <hr>
    <p>Your Funds: {{ funds | localeString }}</p>
  </div>
</template>

<script>
    export default {
      name: "Home",
      computed: {
        funds() {
          return this.$store.getters.funds;
        }
      }
    }
</script>

<style scoped>

</style>
