<template>
  <div>
    <label class="block text-sm font-medium text-slate-700 mb-1">Photo</label>
    <div class="mt-1">
      <label
        for="file-upload"
        :class="[
          'relative flex justify-center items-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-colors',
          isDragging ? 'border-orange-500 bg-orange-50' : 'border-slate-300 hover:border-orange-400'
        ]"
        @drop="onDrop"
        @dragover="onDragOver"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
      >
        <template v-if="image">
          <img :src="image" alt="Preview" class="w-full h-full object-cover rounded-xl" />
          <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-xl">
            <span class="text-white font-semibold">Change Photo</span>
          </div>
          <button 
            type="button" 
            @click.prevent="onImageChange(null)"
            class="absolute top-2 right-2 p-1.5 bg-white/80 text-slate-700 rounded-full hover:bg-white hover:scale-110 transition-all"
          >
            <X :size="18" />
          </button>
        </template>
        
        <template v-else>
          <div class="space-y-2 text-center">
            <UploadCloud :size="48" class="mx-auto text-slate-400" />
            <div class="flex text-sm text-slate-600">
              <span class="font-semibold text-orange-600">Click to upload</span>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-slate-500">PNG or JPG (MAX. 5MB)</p>
          </div>
        </template>
      </label>
      
      <input 
        id="file-upload" 
        name="file-upload" 
        type="file" 
        class="sr-only" 
        @change="handleFileInputChange"
        accept="image/png, image/jpeg" 
      />
    </div>
    
    <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadCloud, X } from 'lucide-vue-next'

interface Props {
  image: string | null
  onImageChange: (base64: string | null) => void
}

const props = defineProps<Props>()

const isDragging = ref(false)
const error = ref<string | null>(null)

const handleFileChange = (file: File | null) => {
  if (!file) return

  if (file.size > 5 * 1024 * 1024) { // 5MB limit
    error.value = 'File size cannot exceed 5MB.'
    return
  }

  if (file.type === 'image/jpeg' || file.type === 'image/png') {
    error.value = null
    const reader = new FileReader()
    reader.onloadend = () => {
      props.onImageChange(reader.result as string)
    }
    reader.readAsDataURL(file)
  } else {
    error.value = 'Invalid file type. Please upload a JPG or PNG file.'
  }
}

const onDrop = (event: DragEvent) => {
  event.preventDefault()
  event.stopPropagation()
  isDragging.value = false
  
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    handleFileChange(event.dataTransfer.files[0])
  }
}

const onDragEnter = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  isDragging.value = true
}

const onDragLeave = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
  isDragging.value = false
}

const onDragOver = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

const handleFileInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files ? target.files[0] : null
  handleFileChange(file)
}
</script>