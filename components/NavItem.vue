<template>
  <div>
    <a 
      href="#" 
      @click.prevent="$emit('click')" 
      :class="[
        'flex items-center p-3 my-1.5 rounded-lg transition-all duration-200 group',
        active 
          ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
          : 'text-slate-600 hover:bg-slate-100'
      ]"
    >
      <div :class="active ? 'text-white' : 'text-slate-500 group-hover:text-orange-500'">
        <component :is="icon" :size="22" />
      </div>
      <span :class="['ml-4 font-medium', active ? 'text-white' : 'text-slate-600 group-hover:text-slate-800']">
        {{ text }}
      </span>
      <ChevronDown 
        v-if="hasSubmenu"
        :size="18" 
        :class="[
          'ml-auto transition-transform duration-200',
          active ? 'text-white' : 'text-slate-400 group-hover:text-slate-600',
          isSubmenuOpen ? 'rotate-180' : ''
        ]" 
      />
    </a>
    
    <div 
      v-if="hasSubmenu && isSubmenuOpen" 
      class="ml-8 mt-2 space-y-1"
    >
      <ul class="space-y-1">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

interface Props {
  icon: any
  text: string
  hasSubmenu?: boolean
  isSubmenuOpen?: boolean
  active?: boolean
}

withDefaults(defineProps<Props>(), {
  hasSubmenu: false,
  isSubmenuOpen: false,
  active: false
})

defineEmits<{
  click: []
}>()
</script>