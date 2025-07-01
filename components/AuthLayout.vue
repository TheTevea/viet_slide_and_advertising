<template>
  <div class="w-full max-w-md">
    <div class="flex justify-center items-center mb-6">
      <img 
        src="https://vireakbuntham.com/img/vireak-buntham.3087fdaf.png" 
        alt="Vireak Buntham Logo" 
        class="h-12 w-auto" 
      />
    </div>
    <div class="bg-white p-8 rounded-xl shadow-lg ring-1 ring-slate-900/5">
      <h2 class="text-2xl font-bold text-slate-800 text-center mb-1">{{ title }}</h2>
      <p class="text-slate-500 text-sm text-center mb-8">Welcome! Please enter your details.</p>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>