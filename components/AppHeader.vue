<template>
  <header class="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-slate-200">
    <div class="px-4 sm:px-8 h-20 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <button 
          @click="onMenuClick" 
          class="lg:hidden text-slate-600 hover:text-orange-500" 
          aria-label="Open menu"
        >
          <Menu :size="24" />
        </button>
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 whitespace-nowrap">
          {{ title }}
        </h2>
      </div>
      
      <div ref="dropdownRef" class="relative">
        <div 
          @click="isDropdownOpen = !isDropdownOpen" 
          class="flex items-center space-x-2 sm:space-x-4 cursor-pointer group p-2 rounded-lg hover:bg-slate-100 transition-colors"
          role="button"
          aria-haspopup="true"
          :aria-expanded="isDropdownOpen"
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

        <div 
          v-if="isDropdownOpen"
          class="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30 animate-in fade-in-0 zoom-in-95"
        >
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
            <div class="px-4 py-3 border-b border-slate-100">
              <p class="text-sm font-semibold text-slate-900 leading-tight">{{ user?.name }}</p>
              <p class="text-xs text-slate-500 truncate mt-0.5">{{ user?.email }}</p>
            </div>
            <div class="py-1">
              <a 
                href="#" 
                @click="handleLogout" 
                class="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors" 
                role="menuitem"
              >
                <LogOut :size="16" class="text-slate-500" />
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Menu, LogOut } from 'lucide-vue-next'
import { useAuth } from '../composables/useAuth'

interface Props {
  title: string
  onMenuClick: () => void
}

defineProps<Props>()

const { user, logout } = useAuth()

const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLDivElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false
  }
}

const handleLogout = (e: MouseEvent) => {
  e.preventDefault()
  isDropdownOpen.value = false
  logout()
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>