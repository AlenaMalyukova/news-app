<template>

<button class="ui-button" @mousedown="click">{{ textBtn }}</button>

</template>

<script>
export default {
  name: "ui-button",
  props: {
    textBtn: { type: String, default: 'Отправить' }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 10px 25px;
  width: 120px;
  cursor: pointer;
  background-color: #0971c7;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    background-color: #1085e6;
  }
}
</style>