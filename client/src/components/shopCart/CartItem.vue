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
        <span class="orders-item__btn-qnt">{{ order.quantity }}</span> 
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
    padding: 20px;
    border-left: none;
  }
  &__btn {
    display: flex;
    align-items: center;
  }
  &__btn-plus,
  &__btn-minus {
    border: none;
    background-color: transparent;
    font-size: 22px;
  }
  &__btn-qnt {
    font-size: 20px;
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
    width: 160px;
    border-radius: 5px;
    color: #9a7d63;
    padding: 7px 0;
    background: transparent;
    border: none;
    border: 1px solid #8b7457;
    font-size: 16px;
  }
}
</style>
