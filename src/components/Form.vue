<template>
  <div class="form">

    <div class="block">
      <UiInput class="input" v-model:value="name" placeholder="Ваше имя"/>
    </div>

    <div class="block">
      <UiInput v-model:value="email" placeholder="Email"/>
    </div>
    
    <div class="block">
      <span>Пол</span>
      <div class="radio-wrap">
        <UiRadio value="male" v-model="gender"> Мужской </UiRadio>
        <UiRadio value="female" v-model="gender"> Женский </UiRadio>
      </div>
    </div>

    <div class="block">Кол-во символов: {{ messageLength }}
      <UiTextArea v-model:value="message"  placeholder="Сообщение"/>
    </div>
    
    <div class="block">
      <UiCheckbox :value="agree" v-model="agree"> Согласен на обработку персональных данных </UiCheckbox>
    </div>

    <div class="block">
      <UiButton @mousedown="sendForm"/>
    </div>
  </div>
</template>

<script>
import UiInput from '@/components/UI/UiInput.vue'
import UiRadio from '@/components/UI/UiRadio.vue'
import UiCheckbox from '@/components/UI/UiCheckbox.vue'
import UiTextArea from '@/components/UI/UiTextArea.vue'
import UiButton from './UI/UiButton.vue'

export default {
  components: {
    UiInput,
    UiRadio,
    UiCheckbox,
    UiTextArea,
    UiButton
  },
  data: () => ({
    name: null,
    email: null,
    gender: 'male',
    message: null,
    agree: false,
  }),
  methods: {
    sendForm() {
      const params = {
        name: this.name,
        email: this.email,
        gender: this.gender,
        message: this.message,
        agree: this.agree
      }

      this.$emit('send-form', params)
      
      this.clearForm()
    },
    clearForm() {
      this.name = null
      this.email = null
      this.gender = 'male'
      this.message = null
      this.agree = false
    },
  },
  computed: {
    messageLength() {
      return this.message?.length || 0
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  background: #fff;
  width: 45%;
  padding: 25px;
  display: flex;
  flex-direction: column;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 15px;
  width: 100%;

  &:last-child {
    padding-bottom: 0;
  }
}

</style>