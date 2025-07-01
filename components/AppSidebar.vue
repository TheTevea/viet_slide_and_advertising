<template>
  <aside :class="[
    'w-72 bg-white border-r border-slate-200 flex flex-col h-screen fixed z-40 transition-transform duration-300 ease-in-out lg:translate-x-0',
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
  ]">
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
import { ref, watch } from 'vue'
import { ChevronDown, LayoutDashboard, Presentation, X } from 'lucide-vue-next'
import type { SlideCategory } from '~/types'

interface Props {
  activeCategory: SlideCategory
  onCategoryChange: (category: SlideCategory) => void
  isSidebarOpen: boolean
  setIsSidebarOpen: (isOpen: boolean) => void
}

const props = defineProps<Props>()

const openMenus = ref({ 
  mobile: props.activeCategory.startsWith('mobile'), 
  website: props.activeCategory.startsWith('website') 
})

watch(() => props.activeCategory, (newCategory) => {
  openMenus.value = {
    mobile: newCategory.startsWith('mobile'),
    website: newCategory.startsWith('website')
  }
})

const toggleMenu = (menu: 'mobile' | 'website') => {
  openMenus.value[menu] = !openMenus.value[menu]
}
</script>

<script lang="ts">
import { defineComponent, h } from 'vue'

// NavItem component
const NavItem = defineComponent({
  props: {
    icon: Object,
    text: String,
    hasSubmenu: { type: Boolean, default: false },
    isSubmenuOpen: { type: Boolean, default: false },
    active: { type: Boolean, default: false }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    return () => h('div', [
      h('a', {
        href: '#',
        onClick: (e: Event) => {
          e.preventDefault()
          emit('click')
        },
        class: [
          'flex items-center p-3 my-1.5 rounded-lg transition-all duration-200 group',
          props.active 
            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
            : 'text-slate-600 hover:bg-slate-100'
        ]
      }, [
        h('div', {
          class: props.active ? 'text-white' : 'text-slate-500 group-hover:text-orange-500'
        }, [h(props.icon, { size: 22 })]),
        h('span', {
          class: 'ml-4 flex-1 text-sm font-semibold whitespace-nowrap'
        }, props.text),
        props.hasSubmenu && h(ChevronDown, {
          size: 18,
          class: [
            'transition-transform duration-200',
            props.isSubmenuOpen ? 'rotate-180' : ''
          ]
        })
      ]),
      props.hasSubmenu && props.isSubmenuOpen && h('ul', {
        class: 'pl-12 pr-2 py-1 space-y-1'
      }, slots.default?.())
    ])
  }
})

// SubNavItem component
const SubNavItem = defineComponent({
  props: {
    text: String,
    active: Boolean
  },
  emits: ['click'],
  setup(props, { emit }) {
    return () => h('li', [
      h('a', {
        href: '#',
        onClick: (e: Event) => {
          e.preventDefault()
          emit('click')
        },
        class: [
          'block p-2 text-sm rounded-md transition-colors',
          props.active 
            ? 'font-bold text-orange-600' 
            : 'text-slate-500 hover:text-orange-500 font-medium'
        ]
      }, props.text)
    ])
  }
})

export { NavItem, SubNavItem }
</script>