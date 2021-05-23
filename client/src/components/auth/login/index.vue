<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.email"
        name="email"
        autocomplete="email"
        placeholder="Email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        type="password"
        autocomplete="current-password"
        placeholder="Passwort"
        :rules="passwordRules"
        class="login__input"
      />
      <Button type="submit" class="login__btn" :loading="loading">Login</Button>
    </Form>
  </AuthContainer>
</template>

<script>
import CustomInput from "../../shared/Input";
import Form from "../../shared/form/index";
import Button from "../../shared/Button";
import AuthContainer from "../../auth/AuthContainer";
import MainTitle from "../../shared/MainTitle";
import { mapActions } from "vuex";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
export default {
  name: "Login",
  components: {
    Form,
    CustomInput,
    Button,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      loading: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired /*, this.rules.passwordValidation*/];
    },
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      //console.log("this.formData", this.formData);
      if (isFormValid) {
        try {
          this.loading = true;

          await this.login(this.formData);

          this.$router.push({ name: "Products" });
          // console.log("data", this.$store.state);
        } catch (error) {
          this.$notify({
            type: "error",
            title: "Something wrong",
            text: error.response.data.message,
          });
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }
  &__title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
  }
  &__input {
    margin-bottom: 20px;
    width: 100%;
  }
  &__btn {
    margin-top: 15px;
    width: 100%;
    border-radius: 5px;
  }
}
</style>
