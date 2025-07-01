<template>
  <section class="bg-slate-800/50 rounded-lg p-6 sm:p-8 shadow-lg border border-slate-700 flex-1 min-h-[300px] flex justify-center items-center">
    <div class="w-full h-full transition-opacity duration-500">
      <AppLoader v-if="isLoading" />
      <AppErrorMessage v-else-if="error" :message="error" />
      <div 
        v-else-if="story" 
        class="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-slate-100 whitespace-pre-wrap"
      >
        {{ story }}
      </div>
      <div v-else class="text-center text-slate-500">
        <p>Your generated story will appear here.</p>
        <p>Enter a prompt above and let the magic begin!</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  story?: string
  isLoading: boolean
  error?: string
}

defineProps<Props>()
</script>