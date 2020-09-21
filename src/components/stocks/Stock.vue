<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        {{ stock.name }}
        <small class="pull-right">{{ stock.price }}</small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input class="form-control"
                 placeholder="Quantity"
                 type="number"
                 v-model="quantity"
                 :class="{ crime: buyStockCrime }">
        </div>

        <div class="pull-right">
          <button class="btn btn-success"
                  :class="{ 'btn-danger': buyStockCrime }"
                  @click="buyStock"
                  :disabled="buyStockCrime || quantity <= 0 || Number.isInteger(quantity)">
            {{ buyStockCrime ? 'Insufficients Funds' : 'Buy' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Stock",
      props: ['stock'],
      data() {
        return {
          quantity: 0
        }
      },
      computed: {
        funds() {
          return this.$store.getters.funds;
        },

        buyStockCrime() {
          return this.quantity * this.stock.price > this.funds;
        }
      },
      methods: {
        buyStock() {
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            stockQuantity: this.quantity
          };
          // console.log(order);
          this.$store.dispatch('buyStocks' , order);
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
