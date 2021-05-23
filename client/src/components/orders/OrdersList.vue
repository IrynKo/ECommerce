<template>
  <div class="orders-list">
    <p class="orders-list__nothing" v-if="!orders.length">No orders</p>
    <template v-else>
      <OrderItem v-for="item in orders" :key="item._id" :item="item" />
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import { createOrder } from "../../services/orders.service";
import OrderItem from "./OrderItem";
export default {
  name: "OrdersList",
  components: {
    OrderItem,
  },

  computed: {
    ...mapGetters(["orders"]),
  },
  methods: {
    ...mapActions(["addOrder", "clearCart", "getOrders"]),
  },
  async created() {
    await this.getOrders();
    //console.log(this.orders, "ORDERS");
  },
};
</script>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
  &__nothing {
    margin-top: 60px;
    font-size: 34px;
    color: #6d5c47;
    font-style: italic;
  }
}
.order-total {
  margin-top: 30px;
  font-size: 24px;
  color: #6d5c47;
}
.order-btn {
  margin-top: 30px;
}
</style>
