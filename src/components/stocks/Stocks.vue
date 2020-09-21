<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock';

  export default {
    components: {
      'appStock': Stock
    },

    computed: {
      // that is very important to we can see stocks in our app
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>

<style scoped>

</style>
