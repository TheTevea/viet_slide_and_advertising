<template>
  <nav 
    v-if="totalPages > 1" 
    class="flex items-center justify-between bg-white px-4 py-3 sm:px-6 mt-6" 
    aria-label="Pagination"
  >
    <div class="hidden sm:block">
      <p class="text-sm text-slate-600">
        Showing <span class="font-semibold text-slate-800">{{ startItem }}</span> to 
        <span class="font-semibold text-slate-800">{{ endItem }}</span> of
        <span class="font-semibold text-slate-800">{{ totalItems }}</span> results
      </p>
    </div>
    
    <div class="flex flex-1 justify-between sm:justify-end gap-2">
      <button
        @click="onPageChange(currentPage - 1)"
        :disabled="currentPage === 1"
        class="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft :size="18" class="mr-2" />
        Previous
      </button>
      
      <button
        @click="onPageChange(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="relative inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
        <ChevronRight :size="18" class="ml-2" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

interface Props {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
}

const props = defineProps<Props>()

const startItem = computed(() => 
  props.totalItems > 0 ? (props.currentPage - 1) * props.itemsPerPage + 1 : 0
)

const endItem = computed(() => 
  Math.min(props.currentPage * props.itemsPerPage, props.totalItems)
)
</script>