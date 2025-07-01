<template>
  <li>
    <a 
      href="#" 
      @click.prevent="$emit('click')" 
      :class="[
        'block p-2 text-sm rounded-md transition-colors',
        active ? 'font-bold text-orange-600' : 'text-slate-500 hover:text-orange-500 font-medium'
      ]"
    >
      {{ text }}
    </a>
  </li>
</template>

<script setup lang="ts">
interface Props {
  text: string
  active: boolean
}

interface Emits {
  (e: 'click'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>