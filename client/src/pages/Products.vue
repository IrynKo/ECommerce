<template>
  <ProductCardDeck />
</template>

<script>
import ProductCardDeck from "../components/products/ProductCardDeck";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    ProductCardDeck,
  },
  computed: {
    ...mapGetters(["orders"]),
  },
  methods: {
    ...mapActions(["getProducts", "getOrders"]),
  },
  created() {
    this.getProducts();
    
  },
};
</script>

<style></style>
