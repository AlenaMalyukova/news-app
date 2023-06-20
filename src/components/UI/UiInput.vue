<template>

<input
  class="ui-input"
  type="text"
  :value="value"
  :placeholder="placeholder"
  @input="$emit('update:value', $event.target.value)"
>

</template>

<script>
export default {
  name: "ui-input",
  props: {
    value: String,
    placeholder: String,
  }
}
</script>

<style lang="scss" scoped>
.ui-input {
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #2c3e50;
  width: 400px;
  outline: none;

  &:focus {
    box-shadow: 0 0 15px #2c3e50;
  }
}
</style>