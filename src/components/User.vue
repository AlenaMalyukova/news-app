<template>
  <div class="user">
    <img class="user__img" src="../assets/user.png" alt="user">
    <div class="user-info">
      <div class="user-info__name">Ирина</div>
      <div class="user-info__email">test@email.com</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  .user__img {
    width: 60px;
  }
}

.user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;

    &__name {
      font-size: 22px;
      font-weight: 600;
      line-height: 1.1;
      color: rgb(39, 39, 39);
    }

    &__email {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.2;
      color: gray;
    }
  }
</style>