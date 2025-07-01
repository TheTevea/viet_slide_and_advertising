<template>
  <aside 
    :class="[
      'w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed z-40 transition-transform duration-300 ease-in-out lg:translate-x-0',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <div class="p-6 border-b border-slate-200 flex items-center justify-between h-20">
      <img 
        src="https://vireakbuntham.com/img/vireak-buntham.3087fdaf.png" 
        alt="Vireak Buntham Logo" 
        class="h-10 w-auto" 
      />
      <button 
        @click="setIsSidebarOpen(false)" 
        class="lg:hidden text-slate-500 hover:text-orange-500" 
        aria-label="Close menu"
      >
        <X :size="24" />
      </button>
    </div>
    
    <nav class="flex-1 p-4 overflow-y-auto">
      <NavItem 
        :icon="LayoutDashboard"
        text="Mobile"
        :has-submenu="true"
        :is-submenu-open="openMenus.mobile"
        :active="activeCategory.startsWith('mobile')"
        @click="toggleMenu('mobile')"
      >
        <SubNavItem 
          text="Slide Show" 
          :active="activeCategory === 'mobile-slideshow'" 
          @click="onCategoryChange('mobile-slideshow')" 
        />
        <SubNavItem 
          text="Advertising" 
          :active="activeCategory === 'mobile-advertising'" 
          @click="onCategoryChange('mobile-advertising')" 
        />
      </NavItem>
      
      <NavItem
        :icon="Presentation"
        text="Website"
        :has-submenu="true"
        :is-submenu-open="openMenus.website"
        :active="activeCategory.startsWith('website')"
        @click="toggleMenu('website')"
      >
        <SubNavItem 
          text="Slide Show" 
          :active="activeCategory === 'website-slideshow'" 
          @click="onCategoryChange('website-slideshow')" 
        />
        <SubNavItem 
          text="Advertising" 
          :active="activeCategory === 'website-advertising'" 
          @click="onCategoryChange('website-advertising')" 
        />
      </NavItem>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ChevronDown, LayoutDashboard, Presentation, X } from 'lucide-vue-next'
import type { SlideCategory } from '~/types'

interface Props {
  activeCategory: SlideCategory
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
  onCategoryChange: (category: SlideCategory) => void
}

defineProps<Props>()

const openMenus = ref({ 
  mobile: false, 
  website: false 
})

const toggleMenu = (menu: 'mobile' | 'website') => {
  openMenus.value[menu] = !openMenus.value[menu]
}

const props = defineProps<Props>()

// Watch for category changes to keep menus open
watch(() => props.activeCategory, (newCategory) => {
  openMenus.value = {
    mobile: newCategory.startsWith('mobile'),
    website: newCategory.startsWith('website')
  }
}, { immediate: true })
</script>