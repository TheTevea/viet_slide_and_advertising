<template>
  <header class="bg-white border-b border-slate-200 h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
    <!-- Mobile menu button -->
    <button 
      @click="$emit('menuClick')"
      class="lg:hidden text-slate-400 hover:text-slate-700 p-2 rounded-lg transition-colors"
    >
      <Menu :size="24" />
    </button>
    
    <!-- Title -->
    <h1 class="text-xl sm:text-2xl font-bold text-slate-800">{{ title }}</h1>
    
    <!-- User menu -->
    <div class="relative" ref="dropdownRef">
      <div 
        @click="isDropdownOpen = !isDropdownOpen"
        class="flex items-center space-x-2 sm:space-x-4 cursor-pointer group p-2 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <img 
          class="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover ring-2 ring-white" 
          :src="`https://i.pravatar.cc/150?u=${user?.email}`" 
          alt="User" 
        />
        <div class="text-right hidden sm:block">
          <p class="font-semibold text-slate-800 text-sm">{{ user?.name || 'User' }}</p>
          <p class="text-xs text-slate-500">Admin</p>
        </div>
        <ChevronDown 
          :size="20" 
          :class="[
            'text-slate-400 group-hover:text-slate-600 transition-transform duration-200',
            isDropdownOpen ? 'rotate-180' : ''
          ]"
        />
      </div>

      <!-- Dropdown menu -->
      <div 
        v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
      >
        <div class="py-1">
          <div class="px-4 py-3 border-b border-slate-100">
            <p class="text-sm font-semibold text-slate-900 leading-tight">{{ user?.name }}</p>
            <p class="text-xs text-slate-500 truncate mt-0.5">{{ user?.email }}</p>
          </div>
          <div class="py-1">
            <a 
              href="#" 
              @click.prevent="handleGoToSettings" 
              class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <Settings :size="16" class="text-slate-500"/>
              <span>Settings</span>
            </a>
            <a 
              href="#" 
              @click.prevent="handleLogout" 
              class="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut :size="16" class="text-red-500"/>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, ChevronDown, Settings, LogOut } from 'lucide-vue-next'

interface Props {
  title: string
}

defineProps<Props>()
defineEmits<{
  menuClick: []
}>()

const { user, logout } = useAuth()

// State
const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement>()

// Handle click outside to close dropdown
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isDropdownOpen.value = false
    }
  }
  document.addEventListener('mousedown', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
})

// Methods
const handleLogout = () => {
  isDropdownOpen.value = false
  logout()
}

const handleGoToSettings = () => {
  isDropdownOpen.value = false
  // TODO: Navigate to settings
}
</script>