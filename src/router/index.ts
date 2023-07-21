import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import RegistrationView from '@/views/RegistrationView.vue'

import { useAuthStore } from '@/stores/auth';
import { LOCAL_STORAGE_ITEMS } from '@/constants/global';
import { ROUTES, RouteNames } from '@/constants/global'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTES.home,
      name: RouteNames.home,
      component: HomeView,
      meta: { isPrivate: true }
    },
    {
      path: ROUTES.login,
      name: RouteNames.login,
      component: LogInView,
      meta: { isPrivate: false }
    },
    {
      path: ROUTES.registration,
      name: RouteNames.registration,
      component: RegistrationView,
      meta: { isPrivate: false }
    },
    {
      path: '/about',
      name: 'about',
      meta: { isPrivate: true },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { user, me } = useAuthStore()

  const token = localStorage.getItem(LOCAL_STORAGE_ITEMS.accessToken)

  if (to.meta.isPrivate && !user && token) {
    const response = await me(token)

    if (response) {
      next({ name: RouteNames.home })
    } else {
      next({ name: RouteNames.login })
    }
  } else if (!to.meta.isPrivate && token && user) {
    next({ name: RouteNames.home })
  }

  else next()
})

export default router
