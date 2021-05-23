<template>
  <div class="product-page">
    <h2 class="product-details__title">Product Details</h2>
    <div v-if="product" class="product-details">
      <div class="product-details__left">
        <img :src="product.imgUrl" alt="" class="product-details__img" />
      </div>

      <div class="product-details__right">
        <h2 class="product-details__name">
          {{ product.title }}
        </h2>
        <h3>
          <span class="product-details__price">$ {{ product.price }}</span>
        </h3>
        <p class="product-details__descr">{{ product.descr }}</p>
        <Button
          class="product-details__btn"
          @click="addProductToCart({ product, quantity })"
        >
          Add to cart
        </Button>
      </div>
    </div>

    <div v-else>
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "../components/shared/Button.vue";
export default {
  components: { Button },
  name: "ProductDetails",
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions(["getOneProduct", "cleanup", "addProductToCart"]),
  },
  computed: {
    ...mapGetters(["product"]),
  },
  created() {
    this.getOneProduct(this.id);
  },
  destroyed() {
    this.cleanup();
  },
};
</script>

<style lang="scss" scoped>
.product-page {
  padding: 30px 30px 0;
}
.product-details {
  display: flex;
  padding-top: 30px;
  &__title {
    color: #383026;
    font-size: 22px;
    margin-bottom: 30px;
  }
  &__right {
    flex: 2 1 0;
    margin-top: 50px;
  }
  &__left {
    flex: 3 1 0;
    margin-right: -80px;
  }
  &__img {
    max-width: 80%;
  }
  &__name {
    color: #847159;
    font-size: 22px;
    margin-bottom: 10px;
    line-height: 1.2;
  }
  &__descr {
    color: #847159;
    font-size: 16px;
    margin-bottom: 40px;
    line-height: 1.5;
  }
  &__price {
    display: block;
    font-size: 26px;
    font-weight: 600;
    color: #847159;
    margin-bottom: 10px;
  }
  /*&__btn {
    z-index: -1;
  }*/
}
</style>
