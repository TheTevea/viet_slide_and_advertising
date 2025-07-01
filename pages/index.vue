<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Login Page -->
    <div v-if="!user && authPage === 'login'">
      <AuthLayout title="Sign In">
        <LoginForm @navigate-to-register="authPage = 'register'" />
      </AuthLayout>
    </div>

    <!-- Register Page -->
    <div v-else-if="!user && authPage === 'register'">
      <AuthLayout title="Create Account">
        <RegisterForm @navigate-to-login="authPage = 'login'" />
      </AuthLayout>
    </div>

    <!-- Main Application -->
    <div v-else class="flex bg-slate-50 min-h-screen">
      <Sidebar 
        :active-category="activeCategory" 
        :current-view="currentView"
        @navigate="handleNavigate"
        :is-sidebar-open="isSidebarOpen" 
        @update:is-sidebar-open="setIsSidebarOpen" 
      />

      <!-- Sidebar overlay for mobile -->
      <div 
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-black/30 z-30 lg:hidden"
        @click="setIsSidebarOpen(false)"
        aria-hidden="true"
      />

      <div class="flex-1 flex flex-col lg:ml-72 transition-all duration-300">
        <Header 
          :title="categoryTitles[activeCategory]"
          @menu-click="setIsSidebarOpen(true)"
          @navigate="handleNavigate"
        />
        <main class="flex-1 p-4 sm:p-6 lg:p-8">
          <SlideManagerPage 
            v-if="currentView === 'manager'"
            :category="activeCategory" 
          />
          <SettingsPage v-else-if="currentView === 'settings'" />
        </main>
      </div>
      
      <!-- Notifications -->
      <div class="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md">
        <Notification 
          v-for="notif in notifications" 
          :key="notif.id" 
          :message="notif.message" 
          :type="notif.type" 
          @close="removeNotification(notif.id)" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SlideCategory } from '~/types'

type View = 'manager' | 'settings'

const { user } = useAuth()
const { notifications, removeNotification } = useSlides()

// State
const authPage = ref<'login' | 'register'>('login')
const activeCategory = ref<SlideCategory>('mobile-slideshow')
const currentView = ref<View>('manager')
const isSidebarOpen = ref(false)

// Category titles mapping
const categoryTitles: Record<SlideCategory, string> = {
  'mobile-slideshow': 'Mobile Slide Show',
  'mobile-advertising': 'Mobile Advertising',
  'website-slideshow': 'Website Slide Show',
  'website-advertising': 'Website Advertising',
}

// Handle navigation
const handleNavigate = (view: View, category?: SlideCategory) => {
  currentView.value = view
  if (category) {
    activeCategory.value = category
  }
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}

// Handle sidebar state
const setIsSidebarOpen = (isOpen: boolean) => {
  isSidebarOpen.value = isOpen
}

// Handle window resize
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
      isSidebarOpen.value = false
    }
  }
  
  window.addEventListener('resize', handleResize)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>