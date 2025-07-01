<template>
  <div :class="baseClasses">
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <CheckCircle 
            v-if="isSuccess" 
            :class="iconColor" 
            aria-hidden="true" 
          />
          <XCircle 
            v-else 
            :class="iconColor" 
            aria-hidden="true" 
          />
        </div>
        <div :class="`ml-3 w-0 flex-1 pt-0.5`">
          <p :class="`text-sm font-semibold ${textColor}`">
            {{ isSuccess ? 'Successfully!' : 'Error!' }}
          </p>
          <p :class="`mt-1 text-sm text-slate-500`">
            {{ message }}
          </p>
        </div>
        <div class="ml-4 flex-shrink-0 flex">
          <button 
            @click="onClose"
            :class="`inline-flex rounded-md p-1.5 text-slate-400 ${closeButtonHover} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 transition-colors`"
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
import { computed } from 'vue'
import { CheckCircle, XCircle, X } from 'lucide-vue-next'

interface Props {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const props = defineProps<Props>()

const isSuccess = computed(() => props.type === 'success')

const baseClasses = "max-w-md w-full bg-white shadow-2xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
const iconColor = computed(() => isSuccess.value ? 'text-green-500' : 'text-red-500')
const textColor = 'text-slate-800'
const closeButtonHover = computed(() => isSuccess.value ? 'hover:bg-green-100' : 'hover:bg-red-100')
</script>