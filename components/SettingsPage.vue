<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold text-slate-800">Settings</h1>
    </div>
    
    <div class="bg-white rounded-lg shadow p-6">
      <p class="text-center text-slate-500">
        Settings page is under development.
      </p>
      <p class="text-center text-sm text-slate-400 mt-2">
        User: {{ user?.name }} ({{ user?.email }})
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composables
const { user } = useAuth()
</script>