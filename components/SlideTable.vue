<template>
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left text-slate-500">
      <thead class="text-xs text-slate-500 uppercase bg-slate-50">
        <tr>
          <th scope="col" class="px-6 py-4 font-semibold tracking-wider">Thumbnail</th>
          <th scope="col" class="px-6 py-4 font-semibold tracking-wider">Title</th>
          <th scope="col" class="px-6 py-4 font-semibold tracking-wider">Order</th>
          <th scope="col" class="px-6 py-4 font-semibold tracking-wider">Status</th>
          <th scope="col" class="px-6 py-4 font-semibold tracking-wider">Last Updated By</th>
          <th scope="col" class="px-6 py-4 font-semibold tracking-wider text-right">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200">
        <tr 
          v-for="slide in slides" 
          :key="slide.id" 
          class="bg-white hover:bg-slate-50/50 transition-colors"
        >
          <td class="px-6 py-4">
            <img 
              :src="slide.image" 
              :alt="slide.title" 
              class="w-28 h-20 object-cover rounded-lg bg-slate-100" 
            />
          </td>
          <td class="px-6 py-4 font-semibold text-slate-900">{{ slide.title }}</td>
          <td class="px-6 py-4">{{ slide.order }}</td>
          <td class="px-6 py-4">
            <span 
              :class="[
                'py-1 px-3 text-xs font-semibold rounded-full',
                slide.status === 'active' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              ]"
            >
              {{ slide.status === 'active' ? 'Active' : 'Inactive' }}
            </span>
          </td>
          <td class="px-6 py-4">{{ slide.lastUpdatedBy }}</td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-end space-x-2">
              <button 
                @click="onEdit(slide)" 
                class="p-2 rounded-full text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Edit :size="18" />
              </button>
              <button 
                @click="onDelete(slide)" 
                class="p-2 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 transition-colors"
              >
                <Trash2 :size="18" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Edit, Trash2 } from 'lucide-vue-next'
import type { Slide } from '../types'

interface Props {
  slides: Slide[]
  onEdit: (slide: Slide) => void
  onDelete: (slide: Slide) => void
}

defineProps<Props>()
</script>