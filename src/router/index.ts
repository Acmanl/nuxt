import { createRouter, createWebHistory } from 'vue-router'
import Home from './../views/home/index.vue'
import Main from './../views/main/index.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '主页',
      KeepAlive: true
    },
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      title: '个人中心',
      KeepAlive: true
    },
    component: Main
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
