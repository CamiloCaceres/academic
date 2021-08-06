// register vue composition api globally
import 'vue-global-api'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createPinia } from 'pinia'
import App from './App.vue'
import { getUserState } from '~/db'
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },

  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))

    // Pinia
    const pinia = createPinia()
    ctx.app.use(pinia)

    if (ctx.isClient) {
      ctx.router.beforeEach(async(to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)
        const isAuth = await getUserState()

        if (requiresAuth && !isAuth) next('/login')
        else if (requiresUnauth && isAuth) next('/')
        else next()
      })
    }
  },

)
