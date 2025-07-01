<template>
  <aside class="w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed z-40 transition-transform duration-300 ease-in-out lg:translate-x-0" 
         :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }">
    
    <!-- Header -->
    <div class="p-6 border-b border-slate-200 flex items-center justify-between h-20">
      <h1 class="text-3xl font-extrabold text-orange-500">Vireak Buntham</h1>
      <button 
        @click="$emit('closeSidebar')"
        class="lg:hidden text-slate-400 hover:text-slate-700 p-1 rounded-full transition-colors"
      >
        <X :size="24" />
      </button>
    </div>
    
    <!-- Navigation -->
    <nav class="flex-1 p-4 overflow-y-auto">
      <NavItem 
        :icon="LayoutDashboard"
        text="Mobile"
        :hasSubmenu="true"
        :isSubmenuOpen="openMenus.mobile"
        :active="activeCategory.startsWith('mobile')"
        @click="toggleMenu('mobile')"
      >
        <SubNavItem 
          text="Slide Show" 
          :active="activeCategory === 'mobile-slideshow'" 
          @click="$emit('categoryChange', 'mobile-slideshow')" 
        />
        <SubNavItem 
          text="Advertising" 
          :active="activeCategory === 'mobile-advertising'" 
          @click="$emit('categoryChange', 'mobile-advertising')" 
        />
      </NavItem>
      
      <NavItem
        :icon="Presentation"
        text="Website"
        :hasSubmenu="true"
        :isSubmenuOpen="openMenus.website"
        :active="activeCategory.startsWith('website')"
        @click="toggleMenu('website')"
      >
        <SubNavItem 
          text="Slide Show" 
          :active="activeCategory === 'website-slideshow'" 
          @click="$emit('categoryChange', 'website-slideshow')" 
        />
        <SubNavItem 
          text="Advertising" 
          :active="activeCategory === 'website-advertising'" 
          @click="$emit('categoryChange', 'website-advertising')" 
        />
      </NavItem>
      
      <NavItem 
        :icon="Settings" 
        text="Settings" 
        @click="() => {}" 
      />
    </nav>
    
    <!-- Footer -->
    <div class="p-4 border-t border-slate-200">
      <NavItem 
        :icon="LogOut"
        :active="false"
        @click="handleLogout"
      >
        <template #text>
          <span class="text-red-500 group-hover:text-red-600">Logout</span>
        </template>
      </NavItem>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { LayoutDashboard, Presentation, Settings, LogOut, X } from 'lucide-vue-next'
import type { SlideCategory } from '~/types'

// Props
interface Props {
  activeCategory: SlideCategory
  isSidebarOpen: boolean
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  categoryChange: [category: SlideCategory]
  closeSidebar: []
}>()

// State
const openMenus = ref({ 
  mobile: props.activeCategory.startsWith('mobile'), 
  website: props.activeCategory.startsWith('website') 
})

// Watch for category changes to update menu states
watch(() => props.activeCategory, (newCategory) => {
  openMenus.value = {
    mobile: newCategory.startsWith('mobile'),
    website: newCategory.startsWith('website')
  }
})

// Methods
const toggleMenu = (menu: 'mobile' | 'website') => {
  openMenus.value[menu] = !openMenus.value[menu]
}

const { logout } = useAuth()
const handleLogout = () => {
  logout()
}
</script>