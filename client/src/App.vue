<template>
  <div>
    <Notification />
    <Navbar />
    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/navigation/Navbar";
import Notification from "./components/notifications";
export default {
  components: {
    Navbar,
    Notification,
  },
  computed: {
    ...mapGetters(["cartItemCount"]),
  },
};
</script>

<style lang="scss" scoped></style>
