<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
      <p class="mt-4 text-slate-600">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useAuth()

// Redirect based on authentication status
watchEffect(() => {
  if (process.client) {
    if (user.value) {
      navigateTo('/slide-manager')
    } else {
      navigateTo('/login')
    }
  }
})

// SEO
useHead({
  title: 'Vireak Buntham - Slide Manager',
  meta: [
    { name: 'description', content: 'Professional slide and advertising management system' }
  ]
})
</script>