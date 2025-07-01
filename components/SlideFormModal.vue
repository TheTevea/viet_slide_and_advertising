<template>
  <div 
    v-if="isOpen"
    class="fixed inset-0 bg-slate-900/70 z-50 flex justify-center items-center p-4 backdrop-blur-sm" 
    @click="onClose"
  >
    <div 
      class="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" 
      @click.stop
    >
      <div class="flex justify-between items-center p-5 border-b border-slate-200">
        <h3 class="text-xl font-semibold text-slate-800">
          {{ slide ? 'Update Slide' : 'Add New Slide' }}
        </h3>
        <button 
          @click="onClose" 
          class="text-slate-400 hover:text-slate-700 p-1 rounded-full transition-colors"
        >
          <X :size="24" />
        </button>
      </div>
      
      <form @submit.prevent="handleSubmit" class="p-6 space-y-6 overflow-y-auto">
        <AppImageUploader :image="image" :onImageChange="setImage" />
        
        <div>
          <label for="title" class="block text-sm font-medium text-slate-700 mb-1">Title</label>
          <input
            id="title"
            v-model="title"
            type="text"
            placeholder="e.g. Summer Collection"
            class="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow"
            required
          />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="order" class="block text-sm font-medium text-slate-700 mb-1">Order</label>
            <input
              id="order"
              v-model.number="order"
              type="number"
              min="1"
              class="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow"
              required
            />
          </div>
          
          <div>
            <label for="status" class="block text-sm font-medium text-slate-700 mb-1">Status</label>
            <select
              id="status"
              v-model="status"
              class="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-shadow bg-white"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        
        <p v-if="error" class="text-red-500 text-sm -mt-2">{{ error }}</p>
      </form>
      
      <div class="flex justify-end items-center p-5 border-t border-slate-200 mt-auto bg-slate-50 rounded-b-xl">
        <button 
          type="button" 
          @click="onClose" 
          class="px-5 py-2.5 bg-white text-slate-700 border border-slate-300 font-semibold rounded-lg hover:bg-slate-100 mr-3 transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          @click="handleSubmit" 
          class="px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-sm"
        >
          {{ slide ? 'Update Slide' : 'Save Slide' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { X } from 'lucide-vue-next'
import type { Slide, SlideCategory } from '~/types'

interface Props {
  isOpen: boolean
  onClose: () => void
  slide: Slide | null
  category: SlideCategory
}

const props = defineProps<Props>()

const { addSlide, updateSlide } = useSlides()

const title = ref('')
const order = ref(1)
const status = ref<'active' | 'inactive'>('active')
const image = ref<string | null>(null)
const error = ref('')

const setImage = (newImage: string | null) => {
  image.value = newImage
}

// Watch for changes in slide prop to populate form
watch(() => [props.slide, props.isOpen], () => {
  if (props.slide) {
    title.value = props.slide.title
    order.value = props.slide.order
    status.value = props.slide.status
    image.value = props.slide.image
  } else {
    title.value = ''
    order.value = 1
    status.value = 'active'
    image.value = null
  }
  error.value = '' // Reset error on open
})

const handleSubmit = () => {
  if (!title.value.trim() || !image.value) {
    error.value = 'Title and image are required.'
    return
  }
  error.value = ''

  const slideData = {
    title: title.value,
    order: Number(order.value),
    status: status.value,
    image: image.value,
    category: props.category,
  }
  
  if (props.slide) {
    updateSlide({ ...props.slide, ...slideData })
  } else {
    addSlide(slideData)
  }
  props.onClose()
}
</script>