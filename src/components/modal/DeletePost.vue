<template>
<div class="modal-shadow" @click.self="close">
  <div class="modal">
    <div class="modal__close" @click="close">&#10006;</div>
    <h3 class="modal__title">Хотите удалить новость?</h3>
    <div class="modal__content">Дефолтный контент модального окна</div>
    <div class="modal-footer">
      <button class="modal-footer__button red-btn" @click="deletePost">
        Удалить
      </button>
      <button class="modal-footer__button" @click="close">
        Нет
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    deletePost() {
      this.$emit('delete');
    },
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-shadow {
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100%;
  width: 75%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  background: #fff;
  border-radius: 8px;
  padding: 40px 30px 30px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__close {
    border-radius: 50%;
    color: #fff;
    background: #2a4cc7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 25px;
    right: 25px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  &__title {
    color: #0971c7;
  }

  &__content {
    margin-bottom: 20px
  }
}
.modal-footer {
  display: flex;
  justify-content: space-around;
  width: 80%;

  &__button {
    background-color: #0971c7;
    color: #fff;
    border: none;
    text-align: center;
    padding: 8px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 8px;
    min-width: 150px;

  }
}
.red-btn {
  background-color: rgb(240, 52, 52);
}
</style>