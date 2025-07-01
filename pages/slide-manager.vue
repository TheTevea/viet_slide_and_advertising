<template>
  <div>
    <h1>Slide Manager</h1>
    <p>This is the slide manager page with middleware protection.</p>
  </div>
</template>

<script setup lang="ts">
// Apply auth middleware to this page
definePageMeta({
  middleware: 'auth'
})
</script>