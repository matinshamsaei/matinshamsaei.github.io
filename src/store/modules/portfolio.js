const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'BUY_STOCK'(state , {stockId , stockPrice , stockQuantity}) {
    // the record is true or false
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += stockQuantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: stockQuantity,
      })
    }

    state.funds -= stockPrice * stockQuantity;
  },

  'SELL_STOCK'(state , {stockId , stockPrice , stockQuantity}) {
    // the record is true or false
    const record = state.stocks.find(element => element.id === stockId);
    if (record.quantity > stockQuantity) {
      record.quantity -= stockQuantity;
    } else {
      // ****** oon stock ro peyda mikone pakesh  mikone kolan az list e stocks e portfolio ******
      state.stocks.splice(state.stocks.indexOf(record) , 1);
    }

    state.funds += stockPrice * stockQuantity;
  },

  // super important for load data
  'Set-Portfolio'(state , portfolio) {
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio;
  }
};

const actions = {
  sellStocks({commit} , order) {
    commit('SELL_STOCK' , order);
  }
};

const getters = {
  // baraye taqir ijad kardan rooye stock hayi k az stocks.js mian va neshoon dadaneshoon
  stockPortfolio(state , getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        price: record.price,
        name: record.name
      }
    })
  },

  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
