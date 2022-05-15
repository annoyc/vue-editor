import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { loadScript } from './utils/utils'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

import { materialList } from '~/data'

Promise.all(materialList.map(m => loadScript(m.source))).then(() => {
  const app = createApp(App)
  materialList.forEach(m => {
    const { render } = (window as any) [m.name]
    app.component(m.name, render)
  })
  console.log(app)
  app.use(router)
  app.use(ElementPlus)
  app.mount('#app')
})



