<template>
  <div class="modal-wrapper" ref="modal-wrapper">
    <div class="modal">
      <div class="modal-title">
        <span>{{ modalTitle }}</span>
        <i class="material-icons" @click="closeModal">close</i>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalTitle: {
      type: String,
      default: "",
    },
  },
  /*data() {},
  computed: {},*/
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  mouunted() {
    let vm = this;
    document.addEventListener("click", function(item) {
      if (item.target === vm.$refs["modal-wrapper"]) {
        vm.closeModal();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  background: rgba(151, 145, 130, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.modal {
  padding: 16px;
  position: flex;
  top: 50px;
  background: #fff;
  width: 600px;
  height: 300px;
  &-title,
  &-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
