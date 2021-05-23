<template>
  <div class="wrapper-input">
    <input
      v-on="listeners"
      v-bind="$attrs"
      class="custom-input"
      @blur="blurHandel"
      :value="value"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      isValid: true,
      error: "",
      isFirstInput: true,
    };
  },
  inject: {
    form: {
      default: null,
    },
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
  watch: {
    value() {
      if (this.isFirstInput) return;
      this.validate();
      //console.log(value);
    },
  },

  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },
  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },
  methods: {
    validate() {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(this.value);
        if (!hasPassed) {
          this.error = message || this.errorMessage;
        }
        return hasPassed;
      });
      return this.isValid;
    },
    blurHandel() {
      if (this.isFirstInput) {
        this.validate();
      }
    },
    reset() {
      this.isFirstInput = true;
      this.isValid = true;
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-input {
  position: relative;
  display: inline-flex;
}
.custom-input {
  height: 50px;
  width: 100%;
  border: 1px solid #968771;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  border-radius: 5px;
  &::placeholder {
    color: inherit;
  }
  &--error {
    border-color: red;
  }
  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
