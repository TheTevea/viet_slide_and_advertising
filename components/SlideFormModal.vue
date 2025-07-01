<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg max-w-md w-full mx-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ slide ? 'Edit Slide' : 'Add New Slide' }}</h3>
      <p class="text-gray-600">Slide form modal placeholder for {{ category }}</p>
      <div class="mt-6 flex justify-end space-x-3">
        <button @click="$emit('close')" class="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
          Cancel
        </button>
        <button class="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Slide, SlideCategory } from '~/types'

interface Props {
  isOpen: boolean
  slide?: Slide | null
  category: SlideCategory
}

defineProps<Props>()

defineEmits<{
  close: []
}>()
</script>