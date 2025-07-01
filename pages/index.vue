<template>
  <div v-if="!user" class="min-h-screen bg-slate-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-slate-800 mb-4">
        Vireak Buntham - Slide Manager
      </h1>
      <p class="text-slate-600 mb-8">
        Please log in to access the slide manager
      </p>
      <div class="space-x-4">
        <NuxtLink 
          to="/login" 
          class="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Login
        </NuxtLink>
        <NuxtLink 
          to="/register" 
          class="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
        >
          Register
        </NuxtLink>
      </div>
    </div>
  </div>

  <div v-else class="flex bg-slate-50 min-h-screen">
    <Sidebar 
      :activeCategory="activeCategory" 
      :isSidebarOpen="isSidebarOpen"
      @categoryChange="handleCategoryChange"
      @closeSidebar="setIsSidebarOpen(false)"
    />

    <!-- Overlay for mobile -->
    <div 
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/30 z-30 lg:hidden"
      @click="setIsSidebarOpen(false)"
    />

    <div class="flex-1 flex flex-col lg:ml-72 transition-all duration-300">
      <AppHeader 
        :title="categoryTitles[activeCategory]"
        @menuClick="setIsSidebarOpen(true)"
      />
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <SlideManagerPage :category="activeCategory" />
      </main>
    </div>
    
    <!-- Notifications -->
    <div class="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md">
      <AppNotification 
        v-for="notif in notifications" 
        :key="notif.id" 
        :message="notif.message" 
        :type="notif.type" 
        @close="removeNotification(notif.id)" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SlideCategory } from '~/types'

const { user } = useAuth()
const { notifications, removeNotification } = useSlides()

// State
const activeCategory = ref<SlideCategory>('mobile-slideshow')
const isSidebarOpen = ref(false)

// Category titles mapping
const categoryTitles: Record<SlideCategory, string> = {
  'mobile-slideshow': 'Mobile Slide Show',
  'mobile-advertising': 'Mobile Advertising',
  'website-slideshow': 'Website Slide Show',
  'website-advertising': 'Website Advertising',
}

// Handle sidebar responsive behavior
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

// Methods
const handleCategoryChange = (category: SlideCategory) => {
  activeCategory.value = category
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}

const setIsSidebarOpen = (isOpen: boolean) => {
  isSidebarOpen.value = isOpen
}
</script>