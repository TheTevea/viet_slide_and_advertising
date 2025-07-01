<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-slate-200">
      <thead class="bg-slate-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
            Slide
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
            Title
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
            Status
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
            Updated
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-200">
        <tr v-for="slide in slides" :key="slide.id" class="hover:bg-slate-50">
          <td class="px-6 py-4 whitespace-nowrap">
            <img :src="slide.image" :alt="slide.title" class="h-16 w-24 object-cover rounded" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm font-medium text-slate-900">{{ slide.title }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span 
              :class="[
                'inline-flex px-2 text-xs font-semibold rounded-full',
                slide.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              ]"
            >
              {{ slide.status }}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
            <div>{{ formatDate(slide.updatedAt) }}</div>
            <div class="text-xs">by {{ slide.lastUpdatedBy }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button @click="$emit('edit', slide)" class="text-orange-600 hover:text-orange-900 mr-3">
              Edit
            </button>
            <button @click="$emit('delete', slide)" class="text-red-600 hover:text-red-900">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Slide } from '~/types'

interface Props {
  slides: Slide[]
}

defineProps<Props>()

defineEmits<{
  edit: [slide: Slide]
  delete: [slide: Slide]
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString()
}
</script>