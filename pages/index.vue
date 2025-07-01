<template>
  <div>
    <!-- Show auth pages if user is not logged in -->
    <NuxtLayout v-if="!user" name="auth">
      <div v-if="authPage === 'login'">
        <AppLoginForm @navigate-to-register="authPage = 'register'" />
      </div>
      <div v-else>
        <AppRegisterForm @navigate-to-login="authPage = 'login'" />
      </div>
    </NuxtLayout>

    <!-- Show main app if user is logged in -->
    <NuxtLayout v-else name="default">
      <SlideManagerPage :category="activeCategory" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { SlideCategory } from '~/types'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const authPage = ref<'login' | 'register'>('login')
const activeCategory = ref<SlideCategory>('mobile-slideshow')

// Set page title
useHead({
  title: 'Vireak Buntham - Slide Manager'
})
</script>