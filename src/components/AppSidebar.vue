<template>
  <nav :class="{ 'opened': isOpen, 'closed': !isOpen }">
    <div v-for="item in menuItems" :key="item.id">
      <AppMenuItem
        :label="item.label"
        :isOpen="isOpen"
        :href="item.path"
        :icon="item.icon"
        :activeIcon="item.activeIcon"
      />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

import IconHome from '@/components/icons/IconHome.vue';
import IconHomeLight from '@/components/icons/IconHomeLight.vue';
import IconSettings from '@/components/icons/IconSettings.vue';
import IconSettingsLight from '@/components/icons/IconSettingsLight.vue';

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
  { id: 1, label: MenuItems.home, path: ROUTES.home, icon: () => IconHomeLight, activeIcon: () => IconHome },
  { id: 2, label: MenuItems.settings, path: ROUTES.settings, icon: () => IconSettingsLight, activeIcon: () => IconSettings },
]

</script>

<style scoped>
  nav {
    padding: 16px;
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
