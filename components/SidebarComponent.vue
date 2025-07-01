<template>
  <aside 
    :class="[
      'fixed inset-y-0 left-0 z-40 w-72 bg-white shadow-xl border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]"
  >
    <div class="flex items-center justify-between h-20 px-6 border-b border-slate-200">
      <img 
        src="https://vireakbuntham.com/img/vireak-buntham.3087fdaf.png" 
        alt="Vireak Buntham Logo" 
        class="h-10 w-auto" 
      />
      <button 
        @click="$emit('update:isSidebarOpen', false)" 
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
        :has-submenu="true"
        :is-submenu-open="openMenus.website"
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
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LayoutDashboard, Presentation, X } from 'lucide-vue-next'
import type { SlideCategory } from '~/types/index'

interface Props {
  activeCategory: SlideCategory
  isSidebarOpen: boolean
}

interface Emits {
  (e: 'categoryChange', category: SlideCategory): void
  (e: 'update:isSidebarOpen', value: boolean): void
}

defineProps<Props>()
defineEmits<Emits>()

// Local state for menu toggles
const openMenus = ref({
  mobile: false,
  website: false
})

const toggleMenu = (menu: 'mobile' | 'website') => {
  openMenus.value[menu] = !openMenus.value[menu]
}
</script>

<style scoped>
/* Component styles if needed */
</style>