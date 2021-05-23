<template>
  <div class="orders-item">
    <img class="orders-item__photo" :src="order.product.imgUrl" alt="" />
    <div class="orders-item__details">
      <div class="orders-item__text">
        <h2 class="orders-item__title">{{ order.product.title }}</h2>
        <p class="orders-item__location">{{ order.product.descr }}</p>
        <p class="orders-item__price">$ {{ order.product.price }}</p>
        <div class="orders-item__cost">
          <p>Quantity: {{ order.quantity }}</p>
        </div>
      </div>
      <div class="orders-item__btn" role="group">
        <button
          class="orders-item__btn-plus"
          @click="minusProductToCart({ product: order.product, quantity })"
        >
          -
        </button>
        {{ order.quantity }}
        <button
          class="orders-item__btn-minus"
          @click="addProductToCart({ product: order.product, quantity })"
        >
          +
        </button>
      </div>
      <button
        class="orders-item__btn-delete"
        @click="deleteProductFromCart(order.product)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartItem",
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  //props: ["order", "_id"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters(["product"]),
  },
  methods: {
    ...mapActions([
      "getOneProduct",
      "addProductToCart",
      "minusProductToCart",
      "deleteProductFromCart",
    ]),
  },
  /* created() {
    console.log("IIII", this.order);
  },*/
};
</script>

<style lang="scss" scoped>
.orders-item {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #9b9a99;
  &__title {
    font-size: 24px;
    color: #6d5c47;
    margin-bottom: 20px;
    font-weight: 700;
  }
  &__photo {
    display: block;
    width: 25%;
    object-fit: cover;
  }
  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // width: 55%;
    padding: 20px;
    // border: 2px solid #e1efff;
    border-left: none;
  }
  &__price {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #847159;
  }
  &__location {
    font-size: 18px;
    margin-bottom: 10px;
    color: #847159;
  }
  &__cost {
    font-size: 18px;
    margin-bottom: 10px;
    color: #6d5c47;
  }
  &__btn-delete {
    width: 100px;
    padding: 7px 0;
    background: transparent;
    border: none;
    border: 1px solid #6d5c47;
    font-size: 14px;
  }
}
</style>
