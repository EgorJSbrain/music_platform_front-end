<template>
  <nav :class="{'opened': isOpen, 'closed': !isOpen }">
      <div v-for="item in menuItems" :key="item.id">
        <i>{{ getIconComponent(item.icon) }}</i> {{ item.label }}
      </div>
  </nav>
</template>

<script setup lang="ts">
import IconHome from '@/components/icons/IconHome.vue';
import IconHomeLight from '@/components/icons/IconHomeLight.vue';
import { defineComponent } from 'vue';
defineComponent({
  IconHome
})
defineProps<{
  isOpen: boolean
}>()

const enum MenuItems {
  home = 'Home',
  settings = 'Swttings',
  albums = 'Albums',
  details = 'Details',
}
const menuItems = [
  { id: 1, label: MenuItems.home, icon: 'home', aciveIcon: 'home_light',  },
  // { id: 2, label: MenuItems.albums, icon: , aciveIcon: ,  },
  // { id: 3, label: MenuItems.details, icon:, aciveIcon: ,  },
  // { id: 4, label: MenuItems.settings, icon:, aciveIcon: ,  },
]

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'home':
      return 'IconHome';
    case 'home-light':
      return 'HeartIcon';
    case 'star':
      return 'StarIcon';
    default:
      return null;
  }
}

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
    width: 256px;
  }
  nav.closed {
    width: 80px;
  }
</style>
