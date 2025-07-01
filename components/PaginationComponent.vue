<template>
  <div class="flex justify-between items-center text-sm text-slate-600">
    <span>
      Showing {{ startItem }}-{{ endItem }} of {{ totalItems }} items
    </span>
    <div class="flex items-center gap-2">
      <button
        @click="$emit('pageChange', currentPage - 1)"
        :disabled="currentPage <= 1"
        class="px-3 py-1 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100"
      >
        Previous
      </button>
      <span class="px-3 py-1 bg-orange-500 text-white rounded text-sm">
        {{ currentPage }}
      </span>
      <span class="text-slate-400">of {{ totalPages }}</span>
      <button
        @click="$emit('pageChange', currentPage + 1)"
        :disabled="currentPage >= totalPages"
        class="px-3 py-1 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
}

interface Emits {
  (e: 'pageChange', page: number): void
}

const props = defineProps<Props>()
defineEmits<Emits>()

const startItem = computed(() => (props.currentPage - 1) * props.itemsPerPage + 1)
const endItem = computed(() => Math.min(props.currentPage * props.itemsPerPage, props.totalItems))
</script>