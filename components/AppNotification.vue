<template>
  <div
    class="bg-white rounded-lg shadow-sm border p-4 mb-3 flex items-start space-x-3 animate-in slide-in-from-right duration-300"
  >
    <div class="flex-shrink-0">
      <CheckCircle v-if="type === 'success'" :size="20" class="text-green-500" />
      <XCircle v-else :size="20" class="text-red-500" />
    </div>
    <div class="flex-1 min-w-0">
      <p :class="['text-sm font-medium', type === 'success' ? 'text-green-800' : 'text-red-800']">
        {{ message }}
      </p>
    </div>
    <button
      @click="$emit('close')"
      :class="['flex-shrink-0 hover:bg-opacity-20 rounded-md p-1 transition-colors', 
               type === 'success' ? 'text-green-500 hover:bg-green-500' : 'text-red-500 hover:bg-red-500']"
    >
      <X :size="16" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle, XCircle, X } from 'lucide-vue-next'

interface Props {
  message: string
  type: 'success' | 'error'
}

defineProps<Props>()
defineEmits<{
  close: []
}>()
</script>