import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LogInView from '@/views/LogInView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import PrivateLayout from '@/components/layouts/PrivateLayout.vue'

import { useAuthStore } from '@/stores/auth';
import { LOCAL_STORAGE_ITEMS } from '@/constants/global';
import { ROUTES, RouteNames } from '@/constants/global'

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      path: ROUTES.root,
      name: RouteNames.root,
      component: PrivateLayout,
      meta: { isPrivate: true },
      children: [
        {
          path: ROUTES.home,
          name: RouteNames.home,
          component: HomeView,
          meta: { pageTitle: 'Home page' },
        },
        {
          path: ROUTES.storage,
          name: RouteNames.storage,
          component: () =>  import('../views/StorageView.vue'),
          meta: { pageTitle: 'Storage page' },
        },
        {
          path: ROUTES.settings,
          name: RouteNames.settings,
          component: () =>  import('../views/SettingsView.vue'),
          meta: { pageTitle: 'Settings page' },
        },
      ]
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const { user, me } = useAuthStore()
  const token = localStorage.getItem(LOCAL_STORAGE_ITEMS.accessToken)

  if (to.meta.isPrivate && !user && token) {
    const response = await me(token)

    if (response) {
      next()
    } else {
      next({ name: RouteNames.login })
    }
  } else if (!to.meta.isPrivate && token && user) {
    next({ name: RouteNames.home })
  }

  else next()
})

export default router
