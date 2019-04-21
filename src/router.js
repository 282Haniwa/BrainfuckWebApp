import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from 'src/layouts/AppLayout'
import NotFound from 'src/layouts/NotFound'
import { Home } from 'src/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        component: Home,
        meta: { title: 'Home | Brainfuck' }
      }
    ]
  },
  {
    path: '*',
    component: NotFound,
    meta: { title: 'NotFound | Brainfuck' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

router.afterEach(to => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
