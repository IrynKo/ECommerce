<template>
  <div class="account-actions" @mousemover="open" @mouseleave="close">
    <button type="button" @click="toggle" class="auth-actions__btn">
      <img src="../../assets/svg/user.svg" width="25px" alt="" srcset="" />
      <ul v-show="isOpen" class="auth-actions__link">
        <li>
          <router-link
            class="auth-actions__reg-link"
            :to="{ name: 'registration-page' }"
            >Sign Up
          </router-link>
        </li>
        <li>
          <router-link
            class="auth-actions__log-link"
            :to="{ name: 'login-page' }"
            >Sign In
          </router-link>
        </li>
      </ul>
    </button>
  </div>
</template>

<script>
export default {
  name: "AuthAction",
  data() {
    return {
      isOpen: false,
    };
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
};
</script>

<style lang="scss" scoped>
.auth-actions {
  position: relative;
  display: inline-flex;
  padding: 5px 0;
  &__btn {
    background: transparent;
    border: none;
  }
  &__link {
    position: absolute;
    right: 5%;
    top: 105%;
    background: #fff;
    padding: 15px;
    width: 250px;
    border: 1px solid #ece9e1;
    text-decoration: none;
    transition: color 0.4s;
    box-shadow: 0px 0px 10px rgba(175, 170, 144, 0.2);
    &:hover {
      color: rgb(59, 57, 57);
    }
  }
  &__link a {
    display: block;
    text-decoration: none;
    font-size: 16px;
    margin-bottom: 10px;
    color: rgb(155, 130, 85);
  }
}
</style>
