<template>
  <div class="layout">
    <AppHeaderVue />

    <div class="content-wrapper">
      <AppSidebar />

      <main class="content">
        <h1>{{ title }}</h1>
        <slot name="content"></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeaderVue from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';


defineProps<{
  title: string
}>()
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  /* display: flex; */
}

.content-wrapper {
  width: 100%;
  display: flex;
}

.content {
  width: 100%;
  border-radius: 24px;
  background-color: var(--vt-c-white-soft);
}

h1 {
  margin-bottom: 32px;
  font-weight: 500;
  user-select: none;
}
</style>