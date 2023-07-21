<template>
  <nav :class="{'opened': isOpen, 'closed': !isOpen }">
      <div v-for="item in menuItems" :key="item.id">
        <AppMenuItem :icon="item.icon" :label="item.label" :isOpen="isOpen" :href="item.path" />
        <!-- <component :is="item.icon()" /> {{ item.label }} -->
      </div>
  </nav>
</template>

<script setup lang="ts">
import IconHome from '@/components/icons/IconHome.vue';
import IconHomeLight from '@/components/icons/IconHomeLight.vue';
import { defineComponent } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import { ROUTES } from '@/constants/global';
defineComponent({
  IconHome
})
defineProps<{
  isOpen: boolean
}>()

const enum MenuItems {
  home = 'Home',
  settings = 'Settings',
  albums = 'Albums',
  details = 'Details',
}
const menuItems = [
  { id: 1, label: MenuItems.home, path: ROUTES.home, icon: () => IconHome, aciveIcon: () => IconHomeLight  },
  { id: 2, label: MenuItems.albums, path: ROUTES.login, icon: () => IconHome, aciveIcon: () => IconHomeLight  },
  // { id: 3, label: MenuItems.details, icon:, aciveIcon: ,  },
  // { id: 4, label: MenuItems.settings, icon:, aciveIcon: ,  },
]

</script>

<style scoped>
  nav {
    padding: 0 16px;
    height: calc(100vh - 64px);
    width: 240px;
    background-color: var(--vt-c-white-back);
    transition: all 0.2s ease-out;
  }

  nav.opened {
    width: 320px;
  }
  nav.closed {
    width: 80px;
  }
</style>
