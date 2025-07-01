<template>
  <div class="bg-white p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5">
    <form @submit.prevent="handleSubmit">
      <div class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input
            id="email"
            type="email"
            :value="user?.email || ''"
            disabled
            class="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 cursor-not-allowed"
          />
        </div>
      </div>
      
      <div class="mt-6 pt-6 border-t border-slate-200 flex justify-end">
        <button
          type="submit"
          :disabled="isLoading || name === user?.name || !name.trim()"
          class="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm disabled:bg-orange-300 disabled:cursor-not-allowed"
        >
          {{ isLoading ? 'Saving...' : 'Save Changes' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../../composables/useAuth'
import { useSlides } from '../../composables/useSlides'

const { user, updateProfile } = useAuth()
const { addNotification } = useSlides()

const name = ref(user.value?.name || '')
const isLoading = ref(false)

const handleSubmit = async () => {
  if (name.value === user.value?.name || !name.value.trim()) return

  isLoading.value = true
  try {
    await updateProfile(name.value)
    addNotification('Profile updated successfully!', 'success')
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.'
    addNotification(`Update failed: ${errorMessage}`, 'error')
  } finally {
    isLoading.value = false
  }
}
</script>