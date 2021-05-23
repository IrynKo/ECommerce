<template>
  <div class="orders-item">
    <img class="orders-item__photo" :src="part.product.imgUrl" alt="" />
    <div class="orders-item__details">
      <div class="orders-item__text">
        <h2 class="orders-item__title">{{ part.product.title }}</h2>
        <p class="orders-item__price">$ {{ part.product.price }}</p>
        <p class="orders-item__quantity">Qnt: {{ part.quantity }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderItemsDetails",
  props: {
    part: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["shoppingCart", "product"]),
  },

  methods: {
    ...mapActions(["getOneProduct", "addProductToCart", "minusProductToCart"]),
  },
};
</script>

<style lang="scss" scoped>
.orders-item {
  display: flex;
  margin-bottom: 5px;
  &__title {
    font-size: 18px;
    color: #6d5c47;
    margin-bottom: 10px;
    font-weight: 700;
  }
  &__photo {
    display: block;
    width: 6%;
    //height: 7%;
    object-fit: cover;
    margin-right: 20px;
  }
  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    padding: 5px 16px;
    //border: 1px solid #a29d9624;
    border-left: none;
    align-self: center;
  }
  &__text {
    display: flex;
    justify-content: space-around;
  }
  &__price {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #847159;
  }
  &__location {
    font-size: 16px;
    margin-bottom: 10px;
    color: #847159;
  }
  &__cost {
    font-size: 18px;
    margin-bottom: 10px;
    color: #6d5c47;
  }
}
</style>
