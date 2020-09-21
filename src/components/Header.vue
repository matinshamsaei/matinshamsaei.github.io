<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    </div>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav customMargin">
        <router-link to="/portfolio" tag="li" active-class="active" class="nav-item"><a class="nav-link">Portfolio</a></router-link>
        <router-link to="/stocks" tag="li" active-class="active" class="nav-item"><a class="nav-link">Stocks</a></router-link>
      </ul>

      <strong class="navbar-text navbar-right">Funds: {{ funds | localeString }}</strong>

      <ul class="navbar-nav float-md-right customMargin">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day<span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "Header",
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions([
        'randomizeStock',
        'fetchData'
      ]),
      endDay() {
        this.randomizeStock();
      },
      saveData() {
        const data = {
          portfolio: this.$store.getters.stockPortfolio,
          stocks: this.$store.getters.stocks,
          funds: this.$store.getters.funds,
        };
        this.$http.put('data.json' , data)
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>

<style scoped>
  .customMargin {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    nav .navbar-nav a {
      padding: 20px .5em;
    }
  }
</style>
