<template>
  <div class="shopping-cart">
    <p class="shopping-cart__title">Shopping Cart</p>
    <ShoppingCartProduct
      v-for="item in shoppingCart"
      :key="item.product._id"
      :item="item"
    />

    <div v-if="shoppingCart.length < 1">
      <div class="shopping-cart__text">
        Your shopping cart is empty
      </div>
      <div class="dropdown-divider"></div>
    </div>

    <div>
      <div>
        <div v-if="shoppingCart.length > 0" class="shopping-cart__price">
          Totalt: $ <span> {{ shoppingCartTotal }} </span>
        </div>
      </div>
      <Button v-if="shoppingCart.length > 0" class="btn ">
        <router-link class="shopping-cart__link" :to="{ name: 'order' }">
          Checkout
        </router-link>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "../shared/Button.vue";
import ShoppingCartProduct from "./ShoppingCartProduct";
export default {
  name: "ShoppingCart",
  components: {
    ShoppingCartProduct,
    Button,
  },
  props: ["cart"],
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  z-index: 1;
  position: absolute;
  right: 5%;
  top: 100%;
  background: #fff;
  padding: 15px;
  color: rgb(5, 4, 2);
  width: 50%;
  min-height: 300px;
  border: 1px solid rgb(83, 70, 54);
  font-family: inherit;
  &__title {
    font-size: 24px;
    color: #6d5c47;
    margin-bottom: 20px;
  }
  &__text {
    font-size: 18px;
    margin-bottom: 10px;
    color: #847159;
  }
  &__price {
    font-size: 18px;
    margin-bottom: 20px;
    color: #847159;
  }
  &__link {
    text-decoration: none;
  }
}
</style>
