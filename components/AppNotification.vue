<template>
  <div 
    class="max-w-md w-full bg-white shadow-2xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <CheckCircle 
            v-if="notification.type === 'success'"
            class="text-green-500" 
            aria-hidden="true" 
          />
          <XCircle 
            v-else
            class="text-red-500" 
            aria-hidden="true" 
          />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-semibold text-slate-800">
            {{ notification.type === 'success' ? 'Successfully!' : 'Error!' }}
          </p>
          <p class="mt-1 text-sm text-slate-500">{{ notification.message }}</p>
        </div>
        <div class="ml-4 flex-shrink-0 flex">
          <button 
            @click="$emit('remove', notification.id)" 
            :class="[
              'inline-flex rounded-md p-1.5 text-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition-colors',
              notification.type === 'success' ? 'hover:bg-green-100' : 'hover:bg-red-100'
            ]"
          >
            <span class="sr-only">Close</span>
            <X :size="20" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle, XCircle, X } from 'lucide-vue-next'
import type { Notification } from '~/types'

interface Props {
  notification: Notification
}

defineProps<Props>()

defineEmits<{
  remove: [id: number]
}>()
</script>