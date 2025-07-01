<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-slate-800 mb-4">
        Vireak Buntham - Slide Manager
      </h1>
      <p class="text-slate-600 mb-8">
        Welcome to the new Nuxt 3 version!
      </p>
      <div class="space-y-4">
        <div v-if="!user" class="space-x-4">
          <button class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Login
          </button>
          <button class="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
            Register
          </button>
        </div>
        <div v-else class="space-y-2">
          <p class="text-slate-700">Welcome back, {{ user.name }}!</p>
          <button 
            @click="logout" 
            class="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, logout } = useAuth()
</script>