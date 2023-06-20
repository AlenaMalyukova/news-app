<template>
  <div>
    <label>
      <input type="checkbox"
        v-bind="inputAttrs"
        v-model="isChecked"
        @change="$emit('input', isChecked)"
      >
      <slot/>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ui-checkbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: this.value,
    };
  },
  computed: {
    inputAttrs() {
      const { ...rest } = this.$attrs;
      return rest;
    }
  },
  watch: {
    value() {
      this.isChecked = this.value
    },
  }
}
</script>