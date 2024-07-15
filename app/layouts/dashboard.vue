<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-950'
  }
})
</script>

<template>
  <div class="h-screen flex">
    <slot/>
  </div>
</template>

<style scoped>
</style>