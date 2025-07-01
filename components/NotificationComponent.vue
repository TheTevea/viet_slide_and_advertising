<template>
  <div 
    :class="[
      'flex items-center gap-3 p-4 rounded-lg shadow-sm border transition-all duration-300',
      type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
    ]"
  >
    <div 
      :class="[
        'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      ]"
    >
      <CheckCircle v-if="type === 'success'" :size="16" class="text-white" />
      <XCircle v-else :size="16" class="text-white" />
    </div>
    <p 
      :class="[
        'flex-1 text-sm font-medium',
        type === 'success' ? 'text-green-800' : 'text-red-800'
      ]"
    >
      {{ message }}
    </p>
    <button
      @click="$emit('close')"
      class="flex-shrink-0 text-slate-400 hover:text-slate-600"
    >
      <X :size="20" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle, XCircle, X } from 'lucide-vue-next'

interface Props {
  message: string
  type: 'success' | 'error'
}

interface Emits {
  (e: 'close'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>