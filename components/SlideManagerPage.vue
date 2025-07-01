<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-slate-800">Slide Manager</h1>
      <p class="text-slate-600">Category: {{ category }}</p>
    </div>
    
    <div class="bg-white rounded-lg shadow p-6">
      <p class="text-center text-slate-500">
        Slide Manager component is under development. 
        This will show slides for the {{ category }} category.
      </p>
      <p class="text-center text-sm text-slate-400 mt-2">
        Total slides: {{ slides.length }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SlideCategory } from '~/types'

interface Props {
  category: SlideCategory
}

// Props
const props = defineProps<Props>()

// Composables
const { getSlidesByCategory } = useSlides()

// Computed
const slides = getSlidesByCategory(props.category)
</script>