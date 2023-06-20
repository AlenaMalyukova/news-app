<template>
  <div class="wrapper">
    <div class="content">
      <div class="param" v-for="(value, key) in params" :key="key">
        <div class="param__name" v-if="value"> {{ key }}: </div>
        <div class="param__data" v-if="value"> {{ value }} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: Object,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 40%;
  padding: 25px;
  background: #fff;
}

.param {
  display: flex;
  padding-bottom: 25px;

  &__name {
    color: #888888;
    padding-right: 15px;
  }
}
</style>