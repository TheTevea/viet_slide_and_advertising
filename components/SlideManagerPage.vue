<template>
  <div class="space-y-6">
    <!-- Header with Add button -->
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-2xl font-bold text-slate-800">{{ categoryTitle }}</h2>
        <p class="text-slate-600 mt-1">Manage your {{ categoryTitle.toLowerCase() }} content</p>
      </div>
      <button
        @click="handleAddClick"
        class="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
      >
        <Plus :size="20" />
        Add Slide
      </button>
    </div>

    <!-- Slides Count -->
    <div class="bg-white rounded-lg border p-4">
      <div class="flex items-center gap-3">
        <ImageIcon :size="24" class="text-slate-400" />
        <div>
          <p class="text-sm text-slate-500">Total Slides</p>
          <p class="text-2xl font-bold text-slate-800">{{ slides.length }}</p>
        </div>
      </div>
    </div>

    <!-- Slides List -->
    <div class="bg-white rounded-lg border">
      <div class="p-6">
        <h3 class="text-lg font-semibold text-slate-800 mb-4">Slides</h3>
        
        <div v-if="slides.length === 0" class="text-center py-12">
          <ImageIcon :size="48" class="text-slate-300 mx-auto mb-4" />
          <p class="text-slate-500 text-lg">No slides yet</p>
          <p class="text-slate-400 text-sm">Click "Add Slide" to get started</p>
        </div>
        
        <div v-else class="space-y-4">
          <div 
            v-for="slide in paginatedSlides" 
            :key="slide.id"
            class="flex items-center gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors"
          >
            <img 
              :src="slide.image" 
              :alt="slide.title"
              class="w-16 h-16 object-cover rounded-lg"
            />
            <div class="flex-1">
              <h4 class="font-semibold text-slate-800">{{ slide.title }}</h4>
              <p class="text-sm text-slate-500">
                Order: {{ slide.order }} • Status: {{ slide.status }}
              </p>
              <p class="text-xs text-slate-400">
                Updated {{ formatDate(slide.updatedAt) }} by {{ slide.lastUpdatedBy }}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <button
                @click="handleEditClick(slide)"
                class="p-2 text-slate-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
              >
                <Edit :size="16" />
              </button>
              <button
                @click="handleDeleteClick(slide)"
                class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 :size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Simple Pagination (if needed) -->
    <div v-if="totalPages > 1" class="flex justify-center">
      <div class="flex items-center gap-2">
        <button
          @click="currentPage > 1 && (currentPage--)"
          :disabled="currentPage <= 1"
          class="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span class="px-3 py-1">{{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="currentPage < totalPages && (currentPage++)"
          :disabled="currentPage >= totalPages"
          class="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, ImageIcon, Edit, Trash2 } from 'lucide-vue-next'
import type { SlideCategory, Slide } from '~/types'

interface Props {
  category: SlideCategory
}

const props = defineProps<Props>()

const { getSlidesByCategory, deleteSlide } = useSlides()

// Computed
const slides = computed(() => getSlidesByCategory(props.category))

const categoryTitle = computed(() => {
  const titles: Record<SlideCategory, string> = {
    'mobile-slideshow': 'Mobile Slide Show',
    'mobile-advertising': 'Mobile Advertising',
    'website-slideshow': 'Website Slide Show',
    'website-advertising': 'Website Advertising',
  }
  return titles[props.category]
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = 7
const totalPages = computed(() => Math.ceil(slides.value.length / itemsPerPage))
const paginatedSlides = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return slides.value.slice(start, end)
})

// Methods
const handleAddClick = () => {
  // TODO: Open add slide modal
  console.log('Add slide for category:', props.category)
}

const handleEditClick = (slide: Slide) => {
  // TODO: Open edit slide modal
  console.log('Edit slide:', slide)
}

const handleDeleteClick = (slide: Slide) => {
  // TODO: Open delete confirmation modal
  if (confirm(`Are you sure you want to delete "${slide.title}"?`)) {
    deleteSlide(slide.id)
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}
</script>