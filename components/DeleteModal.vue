<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg max-w-md w-full mx-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
      <p class="text-gray-600 mb-6">Are you sure you want to delete this slide? This action cannot be undone.</p>
      <div class="flex justify-end space-x-3">
        <button @click="$emit('close')" class="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
          Cancel
        </button>
        <button @click="$emit('confirm')" class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
}

defineProps<Props>()

defineEmits<{
  close: []
  confirm: []
}>()
</script>