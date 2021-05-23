<template>
  <div class="cart-item">
    <div class="shopcard-product">
      <div class="shopcard-product__left">
        <img :src="item.product.imgUrl" alt="" class="shopcard-product__img" />
      </div>
      <div class="shopcard-product__right">
        <p>{{ item.product.title }}</p>
        <p>{{ item.quantity }} x {{ item.product.price }}</p>
        <div class="shopcard-product__btn" >
          <button
            class="shopcard-product__btn-plus"
            @click="minusProductToCart({ product: item.product, quantity })"
          >
            -
          </button>
          <span class="shopcard-product__btn-qnt">{{ item.quantity }}</span>
          <button
            class="shopcard-product__btn-minus"
            @click="addProductToCart({ product: item.product, quantity })"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters(["product"]),
  },
  methods: {
    ...mapActions(["getOneProduct", "addProductToCart", "minusProductToCart"]),
  },
  /*created() {
    this.getOneProduct(this.item.product._id);
  },*/
};
</script>

<style lang="scss" scoped>
.cart-item{
  margin-bottom: 10px;
}
.shopcard-product {
  display: flex;
  &__img {
    width: 90px;
    margin-right: 20px;
  }
  &__btn{
    display: flex;
    align-items: center;
  }
  &__btn-plus,
  &__btn-minus {
    border: none;
    background-color: transparent;
    font-size: 18px;
}
  &__right p {
    margin-bottom: 10px;
  }
}
</style>
