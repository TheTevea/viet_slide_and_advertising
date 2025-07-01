<template>
  <div class="min-h-screen bg-slate-50 flex">
    <!-- Sidebar -->
    <AppSidebar 
      :activeCategory="'mobile-slideshow'" 
      :onCategoryChange="() => {}"
      :isSidebarOpen="isSidebarOpen" 
      :setIsSidebarOpen="setIsSidebarOpen" 
    />

    <!-- Overlay for mobile -->
    <div 
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/30 z-30 lg:hidden"
      @click="setIsSidebarOpen(false)"
      aria-hidden="true"
    />

    <!-- Main content -->
    <div class="flex-1 flex flex-col lg:ml-72 transition-all duration-300">
      <AppHeader 
        title="Settings"
        :onMenuClick="() => setIsSidebarOpen(true)"
      />
      
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1">
              <h2 class="text-xl font-bold text-slate-800">Profile</h2>
              <p class="text-sm text-slate-500 mt-1">Manage your personal information.</p>
            </div>
            <div class="lg:col-span-2">
              <AppProfileSettings />
            </div>
          </div>

          <hr class="my-8 border-slate-200" />

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1">
              <h2 class="text-xl font-bold text-slate-800">Security</h2>
              <p class="text-sm text-slate-500 mt-1">Change your password.</p>
            </div>
            <div class="lg:col-span-2">
              <AppPasswordSettings />
            </div>
          </div>

          <hr class="my-8 border-slate-200" />
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1">
              <h2 class="text-xl font-bold text-slate-800">Appearance</h2>
              <p class="text-sm text-slate-500 mt-1">Customize the look and feel.</p>
            </div>
            <div class="lg:col-span-2">
              <AppAppearanceSettings />
            </div>
          </div>

          <hr class="my-8 border-slate-200" />
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1">
              <h2 class="text-xl font-bold text-slate-800">Data Management</h2>
              <p class="text-sm text-slate-500 mt-1">Manage application data.</p>
            </div>
            <div class="lg:col-span-2">
              <AppDataSettings />
            </div>
          </div>
        </div>
      </main>
    </div>
    
    <!-- Notifications -->
    <div class="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md">
      <AppNotification 
        v-for="notif in notifications" 
        :key="notif.id" 
        :message="notif.message" 
        :type="notif.type" 
        :onClose="() => removeNotification(notif.id)" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useSlides } from '../composables/useSlides'

// Auth redirect
const { user } = useAuth()
if (!user.value) {
  await navigateTo('/login')
}

const { notifications, removeNotification } = useSlides()

// UI state
const isSidebarOpen = ref(false)

const setIsSidebarOpen = (isOpen: boolean) => {
  isSidebarOpen.value = isOpen
}

// Handle window resize
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      isSidebarOpen.value = false
    }
  }
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
})

// SEO
useHead({
  title: 'Settings - Vireak Buntham',
  meta: [
    { name: 'description', content: 'Manage your account settings and preferences' }
  ]
})
</script>