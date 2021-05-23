<template>
  <AuthContainer class="login">
    <MainTitle class="registration__title">Sign Up</MainTitle>
    <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.username"
        name="username"
        autocomplete="username"
        placeholder="Name"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        autocomplete="email"
        placeholder="Email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        type="password"
        autocomplete="current-password"
        placeholder="Passwort"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        name="confirmPassword"
        type="password"
        autocomplete="confirmPasswordd"
        placeholder="Confirm passwort"
        :rules="confirmPasswordRules"
        class="registration__input"
      />
      <Button type="submit" class="registration__btn" :loading="loading"
        >Sign Up</Button
      >
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
  name: "Registration",
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
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPasswordRules() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Passwords do not match",
        }),
      ];
    },
  },
  methods: {
    ...mapActions("auth", ["registration"]),
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = this.$refs.form.validate();

      const { username, email, password } = this.formData;
      if (isFormValid) {
        try {
          this.loading = true;
          await this.registration({
            username,
            email,
            password,
          });

          this.$router.push({ name: "login-page" });
          form.reset();
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
.registration {
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
