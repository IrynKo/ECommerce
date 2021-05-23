<template>
  <main class="login">
    <AuthSection> <Registration /> </AuthSection>
  </main>
</template>

<script>
import AuthSection from "../components/auth/AuthSection";
import Registration from "../components/auth/registration";
export default {
  name: "RegistrationPage",
  components: {
    AuthSection,
    Registration,
  },
};
</script>

<style lang="scss" scoped></style>
