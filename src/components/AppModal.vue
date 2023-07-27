<template>
  <div v-if="isVisible" class="modal-wrapper" :class="{ closed: !isVisible }">
    <div class="modal">
      <h1>{{ title }}</h1>
      <div class="content">
        <slot></slot>
        <div class="buttons">
          <Button :variant="ButtonVariants.text" :click="closeModal" :title="'Close'" />
          <Button :variant="ButtonVariants.contained" :click="closeModal" :title="'Ok'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/AppButton.vue'
import { ButtonVariants } from '@/constants/global';

defineProps<{
  isVisible: boolean
  title?: string
  closeModal: () => void
}>()
</script>

<style scoped>
  .closed {
    display: none;
  }

  .modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000057;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .modal {
    width: 520px;
    height: 590px;
    background-color: var(--vt-c-gray);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 32px 24px;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    justify-content: end;

    :first-of-type {
      margin-right: 12px;
    }
  }
  button:hover {
      background-color: var(--vt-c-green-light);
      color: var(--vt-c-black);
    }
</style>