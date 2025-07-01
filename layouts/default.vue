<template>
  <div class="flex bg-slate-50 min-h-screen">
    <AppSidebar 
      :active-category="activeCategory" 
      :on-category-change="handleCategoryChange"
      :is-sidebar-open="isSidebarOpen"
      :set-is-sidebar-open="setIsSidebarOpen"
    />
    
    <div class="flex-1 flex flex-col lg:ml-0">
      <AppHeader 
        :title="categoryTitles[activeCategory]"
        @toggle-sidebar="setIsSidebarOpen(!isSidebarOpen)"
      />
      
      <main class="flex-1 p-4 lg:p-6">
        <slot />
      </main>
    </div>

    <!-- Notifications -->
    <div class="fixed top-4 right-4 z-50 space-y-2">
      <AppNotification 
        v-for="notification in notifications" 
        :key="notification.id"
        :notification="notification" 
        @remove="removeNotification"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SlideCategory } from '~/types'

const categoryTitles: Record<SlideCategory, string> = {
  'mobile-slideshow': 'Mobile Slide Show',
  'mobile-advertising': 'Mobile Advertising',
  'website-slideshow': 'Website Slide Show',
  'website-advertising': 'Website Advertising',
}

const activeCategory = ref<SlideCategory>('mobile-slideshow')
const isSidebarOpen = ref(false)

const slidesStore = useSlidesStore()
const { notifications } = storeToRefs(slidesStore)
const { removeNotification } = slidesStore

const handleCategoryChange = (category: SlideCategory) => {
  activeCategory.value = category
  if (process.client && window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}

const setIsSidebarOpen = (isOpen: boolean) => {
  isSidebarOpen.value = isOpen
}

// Handle window resize
onMounted(() => {
  if (process.client) {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
        isSidebarOpen.value = false
      }
    }
    window.addEventListener('resize', handleResize)
    onUnmounted(() => window.removeEventListener('resize', handleResize))
  }
})
</script>