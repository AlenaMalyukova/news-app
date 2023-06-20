<template>

  <textarea
    class="ui-textarea"
    type="text"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('update:value', $event.target.value)"
  />

</template>

<script>
  export default {
    name: "ui-textarea",
    props: {
      value: String,
      placeholder: String,
    }
  }
</script>

<style lang="scss" scoped>
.ui-textarea {
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #2c3e50;
  outline: none;
  max-width: 400px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 15px #2c3e50;
  }
}
</style>