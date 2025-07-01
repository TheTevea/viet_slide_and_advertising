<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-slate-800 mb-2">Sign In</h1>
          <p class="text-slate-600">Welcome back! Please sign in to your account.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div v-if="error" class="bg-red-100 border border-red-300 text-red-700 text-sm rounded-lg p-3 text-center">
            {{ error }}
          </div>

          <div class="relative">
            <label for="email" class="sr-only">Email</label>
            <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div class="relative">
            <label for="password" class="sr-only">Password</label>
            <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <span v-if="isLoading">Signing in...</span>
            <span v-else>Sign In</span>
          </button>
        </form>

        <div class="mt-6 text-center">
          <p class="text-slate-600">
            Don't have an account?
            <NuxtLink to="/register" class="text-orange-500 hover:text-orange-600 font-medium">
              Sign up
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Lock } from 'lucide-vue-next'

const { login, user } = useAuth()

const email = ref('admin@vireakbuntham.com')
const password = ref('password123')
const error = ref('')
const isLoading = ref(false)

// Redirect if already logged in
watchEffect(() => {
  if (user.value) {
    navigateTo('/slide-manager')
  }
})

const handleSubmit = async () => {
  error.value = ''
  isLoading.value = true
  
  try {
    await login(email.value, password.value)
    // Navigation will happen via watchEffect
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred.'
  } finally {
    isLoading.value = false
  }
}

// SEO and page meta
useHead({
  title: 'Sign In - Vireak Buntham Slide Manager',
  meta: [
    { name: 'description', content: 'Sign in to access your slide management dashboard' }
  ]
})
</script>