<template>
  <router-link class="link" :to="to">
    <img :src="`../assets/${iconName}.svg`" alt="">
    <p class="link__text">{{ text }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    iconName: String,
    text: String,
    to: String
  }
}
</script>

<style lang="scss" scoped>
.link {
  border-top: 1px solid #00000027;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: inherit;
  }

  &:focus,
  &:active {
    color: rgb(32, 112, 178);
  }

  &__text {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>