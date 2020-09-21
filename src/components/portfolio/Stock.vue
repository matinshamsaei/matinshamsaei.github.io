<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        {{ stock.name }}
        <small class="pull-right">Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input class="form-control"
                 placeholder="Quantity"
                 type="number"
                 v-model="quantity"
                 :class="{ crime: sellStockCrime }">
        </div>

        <div class="pull-right">
          <button class="btn btn-info"
                  :class="{ 'btn-danger': sellStockCrime }"
                  @click="sellStock"
                  :disabled="sellStockCrime || quantity <= 0 || Number.isInteger(quantity)">
            {{ sellStockCrime ? 'Not Enough' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "Stock",
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      sellStockCrime() {
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions([
        'sellStocks'
      ]),

      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          stockQuantity: this.quantity
        };
        this.sellStocks(order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
  .crime {
    border: 1px solid red;
    box-shadow: 0 0 0 .2rem rgba(255, 0, 0, 0.2);
  }
</style>
