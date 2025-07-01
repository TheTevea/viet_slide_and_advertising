<template>
  <div class="flex bg-slate-50 min-h-screen">
    <!-- Sidebar -->
    <SidebarComponent 
      :active-category="activeCategory" 
      @category-change="handleCategoryChange"
      :is-sidebar-open="isSidebarOpen" 
      @update:is-sidebar-open="isSidebarOpen = $event"
    />

    <!-- Sidebar Overlay -->
    <div 
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/30 z-30 lg:hidden"
      @click="isSidebarOpen = false"
      aria-hidden="true"
    />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col lg:ml-72 transition-all duration-300">
      <HeaderComponent 
        :title="categoryTitles[activeCategory]"
        @menu-click="isSidebarOpen = true"
      />
      
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <!-- Content Header -->
        <div class="flex justify-between items-center mb-6">
          <div>
            <h1 class="text-2xl font-bold text-slate-800">{{ categoryTitles[activeCategory] }}</h1>
            <p class="text-slate-600 mt-1">Manage your {{ activeCategory.replace('-', ' ') }} content</p>
          </div>
          <button
            @click="handleAddClick"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus :size="20" />
            Add Slide
          </button>
        </div>

        <!-- Slides Table -->
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div v-if="paginatedSlides.length === 0" class="p-12 text-center">
            <ImageIcon :size="48" class="mx-auto text-slate-400 mb-4" />
            <h3 class="text-lg font-semibold text-slate-800 mb-2">No slides found</h3>
            <p class="text-slate-600 mb-4">Get started by creating your first slide for {{ categoryTitles[activeCategory].toLowerCase() }}.</p>
            <button
              @click="handleAddClick"
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Create First Slide
            </button>
          </div>

          <div v-else>
            <SlideTable 
              :slides="paginatedSlides"
              @edit="handleEditClick"
              @delete="handleDeleteClick"
            />
            
            <!-- Pagination -->
            <div v-if="totalPages > 1" class="border-t border-slate-200 p-4">
              <PaginationComponent
                :current-page="currentPage"
                :total-pages="totalPages"
                :total-items="totalItems"
                :items-per-page="itemsPerPage"
                @page-change="currentPage = $event"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    
    <!-- Notifications -->
    <div class="fixed top-5 right-5 z-[100] space-y-3 w-11/12 max-w-md">
      <NotificationComponent 
        v-for="notif in notifications" 
        :key="notif.id"
        :message="notif.message" 
        :type="notif.type" 
        @close="removeNotification(notif.id)" 
      />
    </div>

    <!-- Modals -->
    <SlideFormModal
      :is-open="isFormModalOpen"
      :slide="selectedSlide"
      :category="activeCategory"
      @close="isFormModalOpen = false"
    />

    <DeleteModal
      :is-open="isDeleteModalOpen"
      :title="slideToDelete?.title || ''"
      @close="isDeleteModalOpen = false"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Plus, Image as ImageIcon } from 'lucide-vue-next'
import type { Slide, SlideCategory } from '~/types/index'

// Auth guard - redirect if not authenticated
const { user } = useAuth()
if (!user.value) {
  navigateTo('/login')
}

// Slides composable
const { getSlidesByCategory, deleteSlide, notifications, removeNotification } = useSlides()

// State
const activeCategory = ref<SlideCategory>('mobile-slideshow')
const isSidebarOpen = ref(false)
const isFormModalOpen = ref(false)
const isDeleteModalOpen = ref(false)
const selectedSlide = ref<Slide | null>(null)
const slideToDelete = ref<Slide | null>(null)

// Pagination
const currentPage = ref(1)
const itemsPerPage = 7

// Computed
const slides = computed(() => getSlidesByCategory(activeCategory.value))
const totalItems = computed(() => slides.value.length)
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage))
const paginatedSlides = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return slides.value.slice(start, end)
})

const categoryTitles: Record<SlideCategory, string> = {
  'mobile-slideshow': 'Mobile Slide Show',
  'mobile-advertising': 'Mobile Advertising',
  'website-slideshow': 'Website Slide Show',
  'website-advertising': 'Website Advertising',
}

// Methods
const handleCategoryChange = (category: SlideCategory) => {
  activeCategory.value = category
  currentPage.value = 1 // Reset pagination when switching categories
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false
  }
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

// Handle window resize
const handleResize = () => {
  if (window.innerWidth >= 1024) { // Tailwind's 'lg' breakpoint
    isSidebarOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// SEO
useHead({
  title: 'Slide Manager - Vireak Buntham',
  meta: [
    { name: 'description', content: 'Manage your slides and advertising content' }
  ]
})
</script>