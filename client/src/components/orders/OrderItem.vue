<template>
  <div class="orders-items">
    <p class="orders-items__title">
      Order Number: <span> {{ item._id.slice(-3) }}</span>
    </p>
    <span class="orders-items__total"
      >Orders total price: $ {{ item.totalPrice }}</span
    >
    <div class="orders-items__content">
      <OrderItemsDetails
        v-for="part in item.items"
        :key="part._id"
        :part="part"
      />
    </div>
  </div>
</template>

<script>
import OrderItemsDetails from "./OrderItemsDetails";

export default {
  name: "OrderItem",
  components: {
    OrderItemsDetails,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-items {
  border-bottom: 1px solid #a8aaac;
  margin-bottom: 60px;
  &__title {
    border-bottom: 1px solid #a8aaac;
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
  &__title span {
    font-size: 18px;
  }
  &__total {
    display: block;
    font-size: 20px;
    margin-bottom: 15px;
  }
}
</style>
