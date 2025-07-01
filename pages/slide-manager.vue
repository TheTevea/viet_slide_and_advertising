<template>
  <div class="min-h-screen bg-slate-50 flex">
    <!-- Sidebar -->
    <AppSidebar 
      :activeCategory="activeCategory" 
      :onCategoryChange="handleCategoryChange"
      :isSidebarOpen="isSidebarOpen" 
      :setIsSidebarOpen="setIsSidebarOpen" 
    />

    <!-- Overlay for mobile -->
    <div 
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/30 z-30 lg:hidden"
      @click="setIsSidebarOpen(false)"
      aria-hidden="true"
    />

    <!-- Main content -->
    <div class="flex-1 flex flex-col lg:ml-72 transition-all duration-300">
      <AppHeader 
        :title="categoryTitles[activeCategory]"
        :onMenuClick="() => setIsSidebarOpen(true)"
      />
      
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
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
            <SlideTable 
              :slides="paginatedSlides" 
              :onEdit="handleEditClick" 
              :onDelete="handleDeleteClick" 
            />
            <AppPagination 
              :currentPage="currentPage"
              :totalPages="totalPages"
              :totalItems="totalItems"
              :itemsPerPage="itemsPerPage"
              :onPageChange="setCurrentPage"
            />
          </div>
          
          <div v-else class="text-center py-20 border-2 border-dashed border-slate-200 rounded-lg">
            <ImageIcon :size="64" class="mx-auto text-slate-300" />
            <h4 class="mt-4 text-lg font-semibold text-slate-600">No Slides Yet</h4>
            <p class="text-slate-400 text-sm mt-1">Click "Add New" to create your first slide.</p>
          </div>
        </div>
      </main>
    </div>
    
    <!-- Notifications -->
    <div class="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md">
      <AppNotification 
        v-for="notif in notifications" 
        :key="notif.id" 
        :message="notif.message" 
        :type="notif.type" 
        :onClose="() => removeNotification(notif.id)" 
      />
    </div>
    
    <!-- Modals -->
    <SlideFormModal
      v-if="isFormModalOpen"
      :isOpen="isFormModalOpen"
      :onClose="() => setIsFormModalOpen(false)"
      :slide="selectedSlide"
      :category="activeCategory"
    />

    <AppDeleteModal
      v-if="isDeleteModalOpen && slideToDelete"
      :isOpen="isDeleteModalOpen"
      :onClose="() => setIsDeleteModalOpen(false)"
      :onConfirm="confirmDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Plus, Image as ImageIcon } from 'lucide-vue-next'
import type { Slide, SlideCategory } from '~/types'
import { useAuth } from '../composables/useAuth'
import { useSlides } from '../composables/useSlides'

// Auth redirect
const { user } = useAuth()
if (!user.value) {
  await navigateTo('/login')
}

const { getSlidesByCategory, deleteSlide, notifications, removeNotification } = useSlides()

// Category management
const categoryTitles: Record<SlideCategory, string> = {
  'mobile-slideshow': 'Mobile Slide Show',
  'mobile-advertising': 'Mobile Advertising', 
  'website-slideshow': 'Website Slide Show',
  'website-advertising': 'Website Advertising',
}

const activeCategory = ref<SlideCategory>('mobile-slideshow')
const slides = computed(() => getSlidesByCategory(activeCategory.value))

// UI state
const isSidebarOpen = ref(false)
const isFormModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedSlide = ref<Slide | null>(null)
const slideToDelete = ref<Slide | null>(null)

// Pagination
const currentPage = ref(1)
const itemsPerPage = 7
const totalItems = computed(() => slides.value.length)
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage))
const paginatedSlides = computed(() => 
  slides.value.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
)

// Handlers
const handleCategoryChange = (category: SlideCategory) => {
  activeCategory.value = category
  currentPage.value = 1
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
}

const setIsSidebarOpen = (isOpen: boolean) => {
  isSidebarOpen.value = isOpen
}

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

const setCurrentPage = (page: number) => {
  currentPage.value = page
}

const setIsFormModalOpen = (isOpen: boolean) => {
  isFormModalOpen.value = isOpen
}

const setIsDeleteModalOpen = (isOpen: boolean) => {
  isDeleteModalOpen.value = isOpen
}

// Handle window resize
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      isSidebarOpen.value = false
    }
  }
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
})

// SEO
useHead({
  title: 'Slide Manager - Vireak Buntham',
  meta: [
    { name: 'description', content: 'Manage your slides and advertising content with ease' }
  ]
})
</script>