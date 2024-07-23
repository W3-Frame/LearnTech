<script setup lang="ts">
import type { _padding } from '#tailwind-config/theme';

const route = useRoute()

const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 100
}, {
  label: 'Dashboard',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Users',
  icon: 'i-heroicons-users',
  to: '/administration/users'
}, {
  label: 'Lessons',
  icon: 'i-heroicons-book-open',
  to: '/administration/lessons'
}]
</script>

<template>
  <UVerticalNavigation :links="links" :ui="{ size: 'text-lg', padding: 'px-3.5 py-2.5'}"/>
</template>

