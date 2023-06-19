<template>
<div class="container">
  <h1>Все новости</h1>
  <Loader v-if="isLoading"/>
  <div class="posts" v-else>
    <NewsCard 
      v-for="post in posts" 
      :key="post.id"
      :post="post"
      @delete="deletePost"
    />
  </div>
  
</div>
</template>

<script>
import axios from '../plugins/axios'
import Loader from '../components/Loader.vue'
import NewsCard from '../components/NewsCard.vue'

export default {
  components: {
    Loader,
    NewsCard,
  },
  data: () => ({
    posts: [],
    isLoading: true,
  }),
  async mounted() {
    await this.loadPosts();
  },
  methods: {
    async loadPosts() {
      const res = await axios({
      method: 'GET',
      url: '/posts'
    });

    this.posts = res.data

    this.isLoading = false;
    },
    async deletePost(id) {
      await axios({
        method: 'DELETE',
        url: `/posts/${id}`
      });

      // this.loadPosts(); С бэка приходят все посты, вместе с удалённым
      // поэтому фильтрую посты на фронте
      this.posts = this.posts.filter(post => post.id !== id)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 70%;
  margin-right: 0;
  margin-left: auto;
  padding: 0 15px;
}
</style>