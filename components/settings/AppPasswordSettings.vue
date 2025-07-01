<template>
  <div class="bg-white p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5">
    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <p v-if="error" class="text-red-500 text-sm p-3 bg-red-50 border border-red-200 rounded-lg">
          {{ error }}
        </p>
        
        <div>
          <label for="current-password" class="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
          <input
            id="current-password"
            v-model="currentPassword"
            type="password"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
            required
          />
        </div>
        
        <div>
          <label for="new-password" class="block text-sm font-medium text-slate-700 mb-1">New Password</label>
          <input
            id="new-password"
            v-model="newPassword"
            type="password"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
            required
          />
        </div>
        
        <div>
          <label for="confirm-password" class="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
            required
          />
        </div>
      </div>
      
      <div class="mt-6 pt-6 border-t border-slate-200 flex justify-end">
        <button
          type="submit"
          :disabled="isLoading || !currentPassword || !newPassword"
          class="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm disabled:bg-orange-300 disabled:cursor-not-allowed"
        >
          {{ isLoading ? 'Updating...' : 'Change Password' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../../composables/useAuth'
import { useSlides } from '../../composables/useSlides'

const { changePassword } = useAuth()
const { addNotification } = useSlides()

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const error = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  error.value = ''

  if (newPassword.value !== confirmPassword.value) {
    error.value = 'New passwords do not match.'
    return
  }
  if (newPassword.value.length < 6) {
    error.value = 'Password must be at least 6 characters long.'
    return
  }

  isLoading.value = true
  try {
    await changePassword(currentPassword.value, newPassword.value)
    addNotification('Password changed successfully!', 'success')
    currentPassword.value = ''
    newPassword.value = ''
    confirmPassword.value = ''
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.'
    error.value = errorMessage
    addNotification(`Update failed: ${errorMessage}`, 'error')
  } finally {
    isLoading.value = false
  }
}
</script>