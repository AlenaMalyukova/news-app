<template>
<div id="App">
  <Sidebar/>
  <router-view/>
</div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

body {
  margin: 0 auto;
  background: lightblue;
}
</style>
