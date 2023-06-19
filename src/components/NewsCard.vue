<template>
<div class="card">
  <div class="card__id">{{ post.id }}</div>
  <div class="card-text">
    <div :class="activeClassTitle" @click="open">{{ post.title }}</div>
    <div class="card-text__user"> Id автора: {{ post.userId }} </div>
    <div class="card-text__body" v-if="isCardBodyShow">{{ post.body }}</div>
  </div>
  <button class="card__btn" @click="openModal">Удалить</button>
</div>
</template>

<script>

export default {
  data: () => ({
    isCardBodyShow: false,
    isOpenModal: false
  }),
  props: {
    post: Object,
  },
  methods: {
    open() {
      this.isCardBodyShow = !this.isCardBodyShow;
    },
    openModal() {
      this.$emit('open-modal', this.post.id);
    },
  },
  computed: {
    activeClassTitle() {
      return this.isCardBodyShow ? 'card-text__title card-text__title_active' : 'card-text__title';
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px 15px;
  border-bottom: 1px solid #aaa8a8;

  &:last-of-type {
    border-bottom: none;
  }

  &__id {
    font-size: 24px;
    font-weight: 500;
    opacity: .5;
  }

  &__userId {
    font-size: 16px;
    color: lightgray;
  }

  &__btn {
    padding: 10px 20px;
    background-color: rgb(241, 100, 100);
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
  }
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 70%;

  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;

    &_active {
      color: #0971c7;
    }
  }

  &__user {
    width: 100%;
    padding-top: 15px;
    color: gray;
    text-align: left;
  }

  &__body {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.1;
    padding-top: 10px;
  }
}
</style>