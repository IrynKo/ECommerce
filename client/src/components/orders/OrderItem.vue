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
//import { mapActions, mapGetters } from "vuex";
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
  /*created() {
    console.log(this.item, "ITEM");
  },*/
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
  }
  &__title span {
    font-size: 18px;
  }
  &__total {
    display: block;
    font-size: 18px;
    margin-bottom: 10px;
  }
}
</style>
