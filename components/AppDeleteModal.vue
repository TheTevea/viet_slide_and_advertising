<template>
  <div 
    v-if="isOpen"
    class="fixed inset-0 bg-slate-900/70 z-50 flex justify-center items-center p-4 backdrop-blur-sm" 
    @click="onClose"
  >
    <div 
      class="bg-white rounded-xl shadow-2xl w-full max-w-md" 
      @click.stop
    >
      <div class="p-6">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10">
            <AlertTriangle class="h-6 w-6 text-orange-500" aria-hidden="true" />
          </div>
          <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 class="text-lg font-semibold leading-6 text-slate-900" id="modal-title">
              Are you sure?
            </h3>
            <div class="mt-2">
              <p class="text-sm text-slate-500">
                This action will permanently delete your slide. You won't be able to revert this.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-slate-50 px-6 py-4 flex flex-col-reverse sm:flex-row sm:justify-end gap-3 rounded-b-xl">
        <button
          type="button"
          class="w-full sm:w-auto justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100 transition-colors"
          @click="onClose"
        >
          Cancel
        </button>
        <button
          type="button"
          class="w-full sm:w-auto justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition-colors"
          @click="onConfirm"
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AlertTriangle } from 'lucide-vue-next'

interface Props {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

defineProps<Props>()
</script>