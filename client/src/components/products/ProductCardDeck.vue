<template>
  <div class="products-list">
    <ProductCard
      v-for="product in products"
      :key="product._id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "./ProductCard";
export default {
  name: "ProductCardDeck",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["products"]),
  },
};
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  padding-top: 30px;
  justify-content: space-around;
}
</style>
