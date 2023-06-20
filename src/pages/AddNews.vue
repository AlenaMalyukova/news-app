<template>
  <div class="content">
    <h1 class="contetn__title">Добавить новость</h1>
    <div class="main">
      <Form @send-form="sendForm"/>
      <ViewParams v-if="params" :params="params"/>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import ViewParams from '@/components/ViewParams.vue'

export default {
  components: { Form, ViewParams },
  data: () => ({
    params: null,
  }),
  methods: {
    sendForm(params) {
      this.params = params
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 72%;
  box-sizing: border-box;
  margin-right: 0;
  margin-left: auto;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>