<template>
  <main class="orders-page">
    <Container>
      <section class="orders-page__content">
        <h2 class="orders-page__title">Shopping cart</h2>
        <CartsList :items="shoppingCart" />
      </section>
    </Container>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Container from "../components/shared/Container";
import CartsList from "../components/shopCart/CartsList";

export default {
  name: "OrderPage",
  components: {
    Container,
    CartsList,
  },
  computed: {
    ...mapGetters(["shoppingCart", "shoppingCartTotal"]),
  },
};
</script>

<style lang="scss" scoped>
.orders-page {
  padding-top: 40px;
  /*&__content {
    //max-width: 730px;
    margin: 0 auto;
  }*/
  &__title {
    font-size: 32px;
    font-weight: 600;
    color: #6d5c47;
    text-align: center;
  }
}
</style>
