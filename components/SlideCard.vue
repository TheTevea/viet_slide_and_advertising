<template>
  <div class="bg-white rounded-lg shadow-md ring-1 ring-slate-900/5 p-4 flex gap-4 relative">
    <img 
      :src="slide.image" 
      :alt="slide.title" 
      class="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-md bg-slate-100 flex-shrink-0" 
    />
    <div class="flex-1 min-w-0">
      <h3 class="font-bold text-slate-800 truncate pr-8">{{ slide.title }}</h3>
      <div class="text-sm text-slate-500 mt-2 space-y-1">
        <p><span class="font-semibold text-slate-600">Order:</span> {{ slide.order }}</p>
        <p class="flex items-center">
          <span class="font-semibold text-slate-600 mr-2">Status:</span> 
          <span 
            :class="[
              'py-0.5 px-2 text-xs font-semibold rounded-full',
              slide.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            ]"
          >
            {{ slide.status === 'active' ? 'Active' : 'Inactive' }}
          </span>
        </p>
        <p class="truncate">
          <span class="font-semibold text-slate-600">Updated by:</span> {{ slide.lastUpdatedBy }}
        </p>
      </div>
    </div>
    <div class="absolute top-2 right-2" @click.stop>
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="p-2 rounded-full text-slate-500 hover:bg-slate-100"
      >
        <MoreVertical :size="20" />
      </button>
      <div 
        v-if="isMenuOpen"
        class="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10"
      >
        <div class="py-1" role="menu" aria-orientation="vertical">
          <button
            @click="handleEdit"
            class="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
            role="menuitem"
          >
            <Edit :size="16" />
            Edit
          </button>
          <button
            @click="handleDelete"
            class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
            role="menuitem"
          >
            <Trash2 :size="16" />
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Edit, Trash2, MoreVertical } from 'lucide-vue-next'
import type { Slide } from '~/types/index'

interface Props {
  slide: Slide
}

interface Emits {
  (e: 'edit', slide: Slide): void
  (e: 'delete', slide: Slide): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const isMenuOpen = ref(false)

const handleEdit = () => {
  isMenuOpen.value = false
  emit('edit', props.slide)
}

const handleDelete = () => {
  isMenuOpen.value = false
  emit('delete', props.slide)
}

const handleClickOutside = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>