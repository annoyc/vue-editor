import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { sum } from '@zyc/shared'

console.log(sum(1, 9))
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.use(ElementPlus)
app.mount('#app')
