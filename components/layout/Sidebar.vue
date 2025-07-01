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
        @click="$emit('update:is-sidebar-open', false)" 
        class="lg:hidden text-slate-500 hover:text-orange-500" 
        aria-label="Close menu"
      >
        <X :size="24" />
      </button>
    </div>
    
    <nav class="flex-1 p-4 overflow-y-auto">
      <!-- Mobile Menu -->
      <div>
        <a 
          href="#" 
          @click.prevent="toggleMenu('mobile')"
          :class="[
            'flex items-center p-3 my-1.5 rounded-lg transition-all duration-200 group',
            currentView === 'manager' && activeCategory.startsWith('mobile')
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
              : 'text-slate-600 hover:bg-slate-100'
          ]"
        >
          <div :class="currentView === 'manager' && activeCategory.startsWith('mobile') ? 'text-white' : 'text-slate-500 group-hover:text-orange-500'">
            <LayoutDashboard :size="22" />
          </div>
          <span class="ml-4 flex-1 text-sm font-semibold whitespace-nowrap">Mobile</span>
          <ChevronDown 
            :size="18" 
            :class="[
              'transition-transform duration-200',
              { 'rotate-180': openMenus.mobile }
            ]" 
          />
        </a>
        <ul v-if="openMenus.mobile" class="pl-12 pr-2 py-1 space-y-1">
          <li>
            <a 
              href="#" 
              @click.prevent="$emit('navigate', 'manager', 'mobile-slideshow')" 
              :class="[
                'block p-2 text-sm rounded-md transition-colors',
                activeCategory === 'mobile-slideshow'
                  ? 'font-bold text-orange-600' 
                  : 'text-slate-500 hover:text-orange-500 font-medium'
              ]"
            >
              Slide Show
            </a>
          </li>
          <li>
            <a 
              href="#" 
              @click.prevent="$emit('navigate', 'manager', 'mobile-advertising')" 
              :class="[
                'block p-2 text-sm rounded-md transition-colors',
                activeCategory === 'mobile-advertising'
                  ? 'font-bold text-orange-600' 
                  : 'text-slate-500 hover:text-orange-500 font-medium'
              ]"
            >
              Advertising
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Website Menu -->
      <div>
        <a 
          href="#" 
          @click.prevent="toggleMenu('website')"
          :class="[
            'flex items-center p-3 my-1.5 rounded-lg transition-all duration-200 group',
            currentView === 'manager' && activeCategory.startsWith('website')
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
              : 'text-slate-600 hover:bg-slate-100'
          ]"
        >
          <div :class="currentView === 'manager' && activeCategory.startsWith('website') ? 'text-white' : 'text-slate-500 group-hover:text-orange-500'">
            <Presentation :size="22" />
          </div>
          <span class="ml-4 flex-1 text-sm font-semibold whitespace-nowrap">Website</span>
          <ChevronDown 
            :size="18" 
            :class="[
              'transition-transform duration-200',
              { 'rotate-180': openMenus.website }
            ]" 
          />
        </a>
        <ul v-if="openMenus.website" class="pl-12 pr-2 py-1 space-y-1">
          <li>
            <a 
              href="#" 
              @click.prevent="$emit('navigate', 'manager', 'website-slideshow')" 
              :class="[
                'block p-2 text-sm rounded-md transition-colors',
                activeCategory === 'website-slideshow'
                  ? 'font-bold text-orange-600' 
                  : 'text-slate-500 hover:text-orange-500 font-medium'
              ]"
            >
              Slide Show
            </a>
          </li>
          <li>
            <a 
              href="#" 
              @click.prevent="$emit('navigate', 'manager', 'website-advertising')" 
              :class="[
                'block p-2 text-sm rounded-md transition-colors',
                activeCategory === 'website-advertising'
                  ? 'font-bold text-orange-600' 
                  : 'text-slate-500 hover:text-orange-500 font-medium'
              ]"
            >
              Advertising
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ChevronDown, LayoutDashboard, Presentation, X } from 'lucide-vue-next'
import type { SlideCategory } from '~/types'

type View = 'manager' | 'settings'

interface Props {
  activeCategory: SlideCategory
  currentView: View
  isSidebarOpen: boolean
}

// Props
const props = defineProps<Props>()

// Emits
defineEmits<{
  'navigate': [view: View, category?: SlideCategory]
  'update:is-sidebar-open': [isOpen: boolean]
}>()

// State
const openMenus = ref({ 
  mobile: props.activeCategory.startsWith('mobile'), 
  website: props.activeCategory.startsWith('website') 
})

// Watch for changes to activeCategory and currentView
watch(() => [props.activeCategory, props.currentView], ([newActiveCategory, newCurrentView]) => {
  // Keep menus open if the view is manager
  if (newCurrentView === 'manager') {
    openMenus.value = {
      mobile: newActiveCategory.startsWith('mobile'),
      website: newActiveCategory.startsWith('website')
    }
  }
})

// Methods
const toggleMenu = (menu: 'mobile' | 'website') => {
  openMenus.value[menu] = !openMenus.value[menu]
}
</script>