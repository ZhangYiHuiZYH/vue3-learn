/** 重置样式 */
import '@/styles/reset.css'
import 'uno.css'
import '@/styles/global.scss'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'


async function setupApp() {
  const app = createApp(App)
  app.use(ElementPlus)
  
  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

setupApp()
