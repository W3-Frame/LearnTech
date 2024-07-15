<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "dark:bg-gray-950",
  },
});
</script>

<template>
  <div class="h-screen w-screen flex">
    <!-- Side Bar -->
    <div class="w-[250px] border border-l-4 p-2">Side bar</div>
    <!-- Main content [Nav + Content]-->
    <div class="w-full">
      <!-- Nav bar -->
      <div class="flex justify-between border border-b-2 p-2">
        <p class="self-center">Home</p>
        <div>
          <UButton
            icon="i-heroicons-bell"
            color="white"
            class="rounded-full p-2"
          />
          <UButton
            icon="i-heroicons-plus"
            color="blue"
            class="rounded-full p-2"
          />
        </div>
      </div>
      <!-- Content -->
      <div class="p-2" role="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  /* border: 1px solid red; */
}
</style>
