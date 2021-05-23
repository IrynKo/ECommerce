<template>
  <div class="orders">
    <h2 class="orders__title">Your Orders</h2>
    <OrdersList />
  </div>
</template>

<script>
import OrdersList from "../components/orders/OrdersList";
export default {
  name: "OrdersPage",
  components: {
    OrdersList,
  },
};
</script>

<style lang="scss" scoped>
.orders {
  padding: 50px 30px 0 30px;
  &__title {
    display: block;
    text-align: center;
    font-size: 36px;
    color: #493b2a;
    margin-bottom: 60px;
  }
}
</style>
