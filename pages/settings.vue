<template>
  <div>
    <h1>Settings</h1>
    <p>This is the settings page with middleware protection.</p>
  </div>
</template>

<script setup lang="ts">
// Apply auth middleware to this page
definePageMeta({
  middleware: 'auth'
})
</script>