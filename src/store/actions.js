import Vue from "vue";

export const fetchData = ({commit}) => {
  // http doesnt need $ because this function exist in Vue
  Vue.http.get('data.json')
    .then(response => response.json())
    //*****************************************************************************************
    .then(data => {
      if(data) {
        // data.portfolio , stocks , funds -> what name we PUT portfolio and others
        const stockPortfolio = data.portfolio;
        const stocks = data.stocks;
        const funds = data.funds;

        const portfolio = {
          stockPortfolio,
          funds
        };

        // stocks.js
        commit('Set-Stocks' , stocks);
        // portfolio.js
        commit('Set-Portfolio' , portfolio)
      }
    })
};
