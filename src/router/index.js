import { createRouter, createWebHashHistory } from "vue-router";
import AllNews from '../pages/AllNews.vue'
import AddNews from '../pages/AddNews.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: AllNews },
    { path: '/create', component: AddNews }
  ]
})