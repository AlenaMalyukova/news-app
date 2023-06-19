<template>
<div class="sidebar">
  <User/>
  <Link 
    v-for="link in links" 
    :key="link.to"
    :to="link.to"
    :iconName="link.iconName"
    :text="link.text"
  />
</div>
</template>

<script>
import User from './User.vue';
import Link from './Link.vue';

export default {
  name: 'Sidebar',
  components: {
    User,
    Link
  },
  data: () => ({
    links: [
      {
        iconName: 'home',
        text: 'Все новости',
        to: '/'
      },
      {
        iconName: 'create',
        text: 'Добавить новость',
        to: '/create'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  padding: 15px;
}
</style>
