<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <h3 class="text-lg font-bold mb-4">Delete Slide</h3>
      <p class="text-slate-600 mb-4">
        Are you sure you want to delete "{{ title }}"? This action cannot be undone.
      </p>
      <div class="flex justify-end gap-2">
        <button 
          @click="$emit('close')"
          class="px-4 py-2 text-slate-600 hover:text-slate-800"
        >
          Cancel
        </button>
        <button 
          @click="$emit('confirm')"
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
  title: string
}

interface Emits {
  (e: 'close'): void
  (e: 'confirm'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>