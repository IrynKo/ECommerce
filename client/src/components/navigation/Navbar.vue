<template>
  <nav class="navbar">
    <router-link class="navbar__logo" to="/">
      <Logo />
    </router-link>
    <div>
      <div class="navbar__item ">
        <button class="navbar__btn" @click="toggle" href="#" type="button">
          <img
            src="../../assets/svg/shopping-basket.svg"
            width="25px"
            alt=""
            srcset=""
          />
        </button>
        <span v-show="cartItemCount" class="navbar__number">{{
          cartItemCount
        }}</span>
        <ShoppingCart v-show="isOpen" />
      </div>
    </div>
    <AccountActions v-if="isLoggedIn" />
    <AuthActions v-else />
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import AuthActions from "../header/AuthActions";
import AccountActions from "../header/AccountActions";
import Logo from "../Logo";

export default {
  name: "Navbar",
  components: {
    ShoppingCart,
    Logo,
    AuthActions,
    AccountActions,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapGetters(["cartItemCount"]),
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    "$route.path"() {
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  min-width: 450px;
}
.navbar {
  position: relative;
  padding: 10px 70px;
  background-color: #a4947d;
  display: flex;
  align-items: center;
  //justify-content: space-evenly;
  &__logo {
    flex: 2 1 0;
    text-decoration: none;
  }
  &__btn {
    background-color: transparent;
    border: none;
  }
  &__number {
    vertical-align: top;
  }
}
</style>
