<template>
  <div class="orders-list">
    <Modal v-if="isOpen" @closeModal="closeModal">
      <div class="order-modal">
        <p class="order-modal__text">Thanks for your order</p>

        <router-link :to="{ name: 'orders' }" class="order-modal__link"
          >To your orders</router-link
        >
        <router-link :to="{ name: 'Products' }" class="order-modal__link"
          >Continue shopping</router-link
        >
      </div>
    </Modal>
    <p class="orders-list__nothing" v-if="!shoppingCart.length">
      No items in your shopping cart
    </p>
    <template v-else>
      <CartItem
        v-for="order in shoppingCart"
        :key="order.product._id"
        :order="order"
      />
    </template>
    <p v-if="shoppingCart.length" class="order-total">
      Total: $ {{ shoppingCartTotal }}
    </p>

    <Button v-if="shoppingCart.length" :loading="isLoading" class="order-btn" @click="handleOrder">
      Make an order
    </Button>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import Modal from "../modal/Modal.vue";
//import { createOrder } from "../../services/orders.service";
import Button from "../shared/Button";
import CartItem from "./CartItem";
export default {
  name: "CartsList",
  components: {
    CartItem,
    Button,
    Modal,
  },
  data() {
    return {
      isLoading: false,
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters([
      "shoppingCart",
      "shoppingCartTotal",
      "cartItemCount",
      "orders",
    ]),
  },
  methods: {
    ...mapActions(["addOrder", "clearCart", "getOrders"]),

    async handleOrder() {
      try {
        this.isLoading = true;
        await this.addOrder({
          items: this.shoppingCart,
          totalPrice: this.shoppingCartTotal,
          totalQuantity: this.cartItemCount,
        });
        this.clearCart();
        this.isOpen = true;
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Произошла ошибка",
          text: error.response.data.message,
        });
      } finally {
        this.isLoading = false;
      }
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.orders-list {
  margin-top: 20px;
  &__nothing {
    display: block;
    margin-top: 50px;
    font-size: 24px;
    color: #6d5c47;
  }
}
.order-total {
  margin-top: 30px;
  margin-left: 25%;
  font-size: 24px;
  color: #6d5c47;
}
.order-btn {
  margin-top: 30px;
  margin-left: 25%;
  border-radius: 5px;
}
.order-modal {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  &__text {
    text-align: center;
    font-size: 28px;
    margin-bottom: 40px;
  }
  &__link {
    margin-bottom: 15px;
    text-decoration: none;
    font-size: 22px;
    color: #c5955c;
    letter-spacing: 1px;
    text-align: center;
  }
}
</style>
