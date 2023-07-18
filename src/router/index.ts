import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import { useAuthStore } from '@/stores/auth';
import { LOCAL_STORAGE_ITEMS } from '@/constants/global';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { isPrivate: true },
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      meta: { isPrivate: false },
      component: LogInView
    },
    {
      path: '/registration',
      name: 'registration',
      meta: { isPrivate: false },
      component: RegistrationView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { user, me } = useAuthStore()

  if (to.meta.isPrivate && !user) {
    const token = localStorage.getItem(LOCAL_STORAGE_ITEMS.accessToken)

    if (token) {
      const response = await me(token)

      if (response) {
        next({ name: 'home' })
      } else {
        next({ name: 'login' })
      }
    }
  }
  // if (to.meta.isPrivate && !user) next({ name: 'login' })
  else next()
})

export default router
