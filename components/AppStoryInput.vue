<template>
  <section class="bg-slate-800/50 rounded-lg p-6 shadow-lg border border-slate-700">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      <label for="prompt-textarea" class="text-lg font-medium text-slate-300">
        What is your story about?
      </label>
      <textarea
        id="prompt-textarea"
        v-model="prompt"
        placeholder="e.g., A lost astronaut finding a mysterious artifact on Mars..."
        class="w-full h-32 p-3 bg-slate-900 border border-slate-700 rounded-md resize-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-shadow duration-200 text-slate-200 placeholder-slate-500"
        required
      />
      <button
        type="submit"
        :disabled="isLoading || !prompt.trim()"
        class="self-end px-6 py-2.5 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500 transition-all duration-200 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:text-slate-400 flex items-center justify-center gap-2"
      >
        <template v-if="isLoading">
          <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating...
        </template>
        <template v-else>
          Generate Story
        </template>
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  onSubmit: (prompt: string) => void
  isLoading: boolean
}

const props = defineProps<Props>()

const prompt = ref<string>('')

const handleSubmit = () => {
  props.onSubmit(prompt.value)
}
</script>