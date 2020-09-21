import dataStocks from '../../data/stocks';

const state = {
  stocks: []
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

const mutations = {
  'Set-Stocks'(state , stocks) {
    state.stocks = stocks;
  },
  // chon random kardan automatic anjam mishe baraye hamin be payload niaz nadarim o faqat state ro migirim
  'Rnd-Stocks'(state) {
    state.stocks.forEach(element => {
      element.price = Math.floor(element.price * (1 + Math.random() - .5))
    })
  }
};

const actions = {
  //**********
  initStock({commit}) {
    commit('Set-Stocks' , dataStocks);
  },
  randomizeStock({commit}) {
    commit('Rnd-Stocks');
  },
  buyStocks({commit} , order) {
    commit('BUY_STOCK' , order);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
