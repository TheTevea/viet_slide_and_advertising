<template>
  <AuthLayout title="Create Account">
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div v-if="error" class="bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg p-3 text-center">
        {{ error }}
      </div>
      
      <div class="relative">
        <label for="name" class="sr-only">Full Name</label>
        <User class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
          required
        />
      </div>
      
      <div class="relative">
        <label for="email-reg" class="sr-only">Email</label>
        <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          id="email-reg"
          v-model="email"
          type="email"
          placeholder="Email address"
          class="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
          required
        />
      </div>
      
      <div class="relative">
        <label for="password-reg" class="sr-only">Password</label>
        <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          id="password-reg"
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 text-slate-800 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 outline-none"
          required
        />
      </div>
      
      <button
        type="submit"
        :disabled="isLoading"
        class="w-full flex justify-center items-center px-6 py-3.5 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 disabled:bg-orange-300 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Creating account...' : 'Create Account' }}
      </button>
      
      <p class="text-center text-sm text-slate-500">
        Already have an account?
        <button 
          type="button" 
          @click="$emit('navigateToLogin')" 
          class="font-semibold text-orange-600 hover:underline"
        >
          Sign in
        </button>
      </p>
    </form>
  </AuthLayout>
</template>

<script setup lang="ts">
import { User, Mail, Lock } from 'lucide-vue-next'

defineEmits<{
  navigateToLogin: []
}>()

const authStore = useAuthStore()
const { register } = authStore

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters long.'
    return
  }
  
  error.value = ''
  isLoading.value = true
  try {
    await register(name.value, email.value, password.value)
    // On success, the store will update and the page will re-render
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred.'
  } finally {
    isLoading.value = false
  }
}
</script>