<template>
<div class="container">
  <h1>Все новости</h1>
  <Loader v-if="isLoading"/>
  <div class="posts" v-else>
    <NewsCard 
      v-for="post in posts" 
      :key="post.id"
      :post="post"
      @open-modal="openModal"
    />
  </div>
  <DeletePost
    v-if="isOpenModal"
    :isOpenModal="isOpen"
    @close="closeModal"
    @delete="deletePost"
  />
</div>
</template>

<script>
import axios from '../plugins/axios'
import Loader from '../components/Loader.vue'
import NewsCard from '../components/NewsCard.vue'
import DeletePost from '../components/modal/DeletePost.vue'

export default {
  components: {
    Loader,
    NewsCard,
    DeletePost
  },
  data: () => ({
    posts: [],
    postIdForDelete: null,
    isLoading: true,
    isOpenModal: false
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
    async deletePost() {
      await axios({
        method: 'DELETE',
        url: `/posts/${this.postIdForDelete}`
      });

      this.posts = this.posts.filter(post => post.id !== this.postIdForDelete);

      this.closeModal();
    },
    openModal(postId) {
      this.isOpenModal = true;
      this.postIdForDelete = postId;
    },
    closeModal() {
      this.isOpenModal = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 72%;
  box-sizing: border-box;
  margin-right: 0;
  margin-left: auto;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.posts {
  background: #fff;
  padding: 20px 15px;
}
</style>