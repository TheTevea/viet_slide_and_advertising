<template>
  <div class="bg-white p-4 sm:p-6 rounded-xl shadow-lg ring-1 ring-slate-900/5">
    <div class="flex justify-between items-center pb-4 border-b border-slate-200 mb-6">
      <h3 class="text-lg sm:text-xl font-semibold text-slate-700">All Slides</h3>
      <button
        @click="handleAddClick"
        class="flex items-center bg-orange-500 text-white px-3 sm:px-4 py-2.5 rounded-lg hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md"
      >
        <Plus :size="20" class="sm:mr-2" />
        <span class="font-semibold hidden sm:inline">Add New</span>
      </button>
    </div>
    
    <div v-if="slides.length > 0">
      <SlideTable :slides="paginatedSlides" @edit="handleEditClick" @delete="handleDeleteClick" />
      <AppPagination 
        :current-page="currentPage"
        :total-pages="totalPages"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        @page-change="currentPage = $event"
      />
    </div>
    
    <div v-else class="text-center py-20 border-2 border-dashed border-slate-200 rounded-lg">
      <ImageIcon :size="64" class="mx-auto text-slate-300" />
      <h4 class="mt-4 text-lg font-semibold text-slate-600">No Slides Yet</h4>
      <p class="text-slate-400 text-sm mt-1">Click "Add New" to create your first slide.</p>
    </div>
    
    <SlideFormModal
      :is-open="isFormModalOpen"
      :slide="selectedSlide"
      :category="category"
      @close="isFormModalOpen = false"
    />

    <DeleteModal
      :is-open="isDeleteModalOpen"
      @close="isDeleteModalOpen = false"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { Plus, Image as ImageIcon } from 'lucide-vue-next'
import type { Slide, SlideCategory } from '~/types'

interface Props {
  category: SlideCategory
}

const props = defineProps<Props>()

const slidesStore = useSlidesStore()
const { getSlidesByCategory, deleteSlide } = slidesStore

const slides = computed(() => getSlidesByCategory(props.category))

const isFormModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedSlide = ref<Slide | null>(null)
const slideToDelete = ref<Slide | null>(null)

// Pagination state
const currentPage = ref(1)
const itemsPerPage = 7
const totalItems = computed(() => slides.value.length)
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage))
const paginatedSlides = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return slides.value.slice(start, end)
})

const handleAddClick = () => {
  selectedSlide.value = null
  isFormModalOpen.value = true
}

const handleEditClick = (slide: Slide) => {
  selectedSlide.value = slide
  isFormModalOpen.value = true
}

const handleDeleteClick = (slide: Slide) => {
  slideToDelete.value = slide
  isDeleteModalOpen.value = true
}

const confirmDelete = () => {
  if (slideToDelete.value) {
    deleteSlide(slideToDelete.value.id)
    isDeleteModalOpen.value = false
    slideToDelete.value = null
  }
}
</script>