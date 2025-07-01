<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="text-center text-3xl font-extrabold text-orange-500 mb-2">
          Vireak Buntham
        </h1>
        <h2 class="text-center text-xl font-bold text-slate-800">
          Create your account
        </h2>
        <p class="mt-2 text-center text-sm text-slate-600">
          Or
          <NuxtLink to="/login" class="font-medium text-orange-600 hover:text-orange-500">
            sign in to your existing account
          </NuxtLink>
        </p>
      </div>
      
      <div class="bg-white py-8 px-6 shadow-lg rounded-lg">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {{ error }}
          </div>
          
          <div>
            <label for="name" class="block text-sm font-medium text-slate-700">
              Full name
            </label>
            <div class="mt-1 relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User class="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="name"
                v-model="name"
                type="text"
                required
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-slate-700">
              Email address
            </label>
            <div class="mt-1 relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail class="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-slate-700">
              Password
            </label>
            <div class="mt-1 relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock class="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                class="appearance-none block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isLoading">Creating account...</span>
              <span v-else>Create account</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Mail, Lock } from 'lucide-vue-next'

const { register } = useAuth()

// State
const name = ref('')
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const error = ref('')

// Methods
const handleSubmit = async () => {
  if (!name.value || !email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }

  isLoading.value = true
  error.value = ''

  try {
    await register(name.value, email.value, password.value)
    await navigateTo('/')
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Registration failed'
  } finally {
    isLoading.value = false
  }
}

// Meta
useHead({
  title: 'Register - Vireak Buntham'
})
</script>