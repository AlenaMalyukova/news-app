<template>
  <router-link :class="`link ${activeCLass(to)}`" :to="to">
    <span :class="`link__icon icon-${iconName}`"></span>
    <p class="link__text">{{ text }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    iconName: String,
    text: String,
    to: String
  },
  methods: {
    activeCLass(to) {
      if (this.$route.path === to) {
        return 'link_active'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  border-top: 1px solid #aaa8a8;
  color: #000;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 0;
  text-decoration: none;
  cursor: pointer;

  &_active {
    color: #0971c7;
  }

  &__icon {
    font-size: 24px;
    font-weight: 600;
    padding-right: 10px;
  }

  &__text {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>