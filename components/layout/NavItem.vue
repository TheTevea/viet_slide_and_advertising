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
      <component 
        :is="icon" 
        :size="22" 
        :class="active ? 'text-white' : 'text-slate-500 group-hover:text-orange-500'"
      />
      <span class="ml-4 flex-1 text-sm font-semibold whitespace-nowrap">
        <slot name="text">{{ text }}</slot>
      </span>
      <ChevronDown 
        v-if="hasSubmenu"
        :size="18" 
        :class="[
          'transition-transform duration-200',
          isSubmenuOpen ? 'rotate-180' : ''
        ]"
      />
    </a>
    <ul v-if="hasSubmenu && isSubmenuOpen" class="pl-12 pr-2 py-1 space-y-1">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

interface Props {
  icon: any
  text?: string
  hasSubmenu?: boolean
  isSubmenuOpen?: boolean
  active?: boolean
}

defineProps<Props>()
defineEmits<{
  click: []
}>()
</script>