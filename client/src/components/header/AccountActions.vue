<template>
  <div class="account-actions" @mousemover="open" @mouseleave="close">
    <button type="button" @click="toggle" class="account-actions__btn">
      <img src="../../assets/svg/user.svg" width="25px" alt="" srcset="" />
      <ul v-show="isOpen" class="account-actions__list">
        <li class="account-actions__item">
          <router-link class="account-actions__link" :to="{ name: 'orders' }">
            My orders
          </router-link>
        </li>
        <li class="account-actions__item">
          <button
            type="button"
            @click="handleLogOut"
            class="account-actions__logout"
          >
            Log Out
          </button>
        </li>
      </ul>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AccountActions",
  props: ["cart"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
    ...mapActions(["clearCart"]),
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    async handleLogOut() {
      try {
        await this.logOut();
        this.clearCart();
        const { requiresAuth } = this.$route.meta;

        //console.log(requiresAuth);
        if (!requiresAuth) {
          this.$router.push({ name: "login-page" });
        } else this.$router.push({ name: "login-page" });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Someting went wrong",
          text: error.response.data.message,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.account-actions {
  position: relative;
  display: inline-flex;
  padding: 5px 0;
  color: #fff;
  &__btn {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: 16px;
    padding: 0;
    transition: color 0.4s;
    margin-left: 20px;
  }
  &__text {
    margin-right: 5px;
  }
  &__icon {
    transition: fill 0.4s;
    fill: currentColor;
    width: 16px;
    height: 18px;
  }
  &__list {
    position: absolute;
    right: 0;
    top: 100%;
    background: #fff;
    padding: 15px;
    color: rgb(155, 130, 85);
    width: 250px;
    border: 1px solid #ece9e1;
    box-shadow: 0px 0px 10px rgba(175, 170, 144, 0.2);
  }
  &__item {
    margin-bottom: 5px;
    transition: color 0.4s;
    &:hover {
      color: #c5955c;
    }
  }
  &__link {
    text-decoration: none;
    color: rgb(155, 130, 85);
  }
  &__logout {
    padding: 0;
    background: none;
    border: none;
    font-size: inherit;
    color: rgb(155, 130, 85);
    font-family: inherit;
    cursor: pointer;
  }
}
</style>
