<template>
  <div class="space-y-4">
    <SlideCard 
      v-for="slide in slides" 
      :key="slide.id"
      :slide="slide"
      @edit="$emit('edit', slide)"
      @delete="$emit('delete', slide)"
    />
  </div>
</template>

<script setup lang="ts">
import type { Slide } from '~/types/index'

interface Props {
  slides: Slide[]
}

interface Emits {
  (e: 'edit', slide: Slide): void
  (e: 'delete', slide: Slide): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>