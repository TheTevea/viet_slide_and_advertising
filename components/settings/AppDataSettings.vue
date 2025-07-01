<template>
  <div>
    <div class="bg-white p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5 border-2 border-transparent hover:border-red-500 transition-colors">
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-md font-semibold text-slate-800">Clear All App Data</h3>
          <p class="text-sm text-slate-500 mt-1">This will permanently delete all slides and log you out.</p>
        </div>
        <button
          @click="isDeleteModalOpen = true"
          class="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm"
        >
          Clear Data
        </button>
      </div>
    </div>
    
    <AppDeleteModal 
      :isOpen="isDeleteModalOpen"
      :onClose="() => isDeleteModalOpen = false"
      :onConfirm="() => {
        isDeleteModalOpen = false
        handleClearData()
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../../composables/useAuth'
import { useSlides } from '../../composables/useSlides'

const { logout } = useAuth()
const { addNotification } = useSlides()

const isDeleteModalOpen = ref(false)

const handleClearData = () => {
  try {
    // Clear slides from local storage
    localStorage.removeItem('slides')
    // Log the user out, which clears their session
    logout()
    // Navigation will happen automatically due to auth state change
  } catch (error) {
    addNotification('Failed to clear data.', 'error')
    console.error('Data clearing error:', error)
  }
}
</script>