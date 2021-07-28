<script setup lang="ts">
import { useHead } from '@vueuse/head'
// import { useLoadDocuments } from './db'

// const docs = useLoadDocuments()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <main class="px-4 h-screen text-center text-gray-700 dark:text-gray-200 dark:bg-gray-800">
    <router-view />
  </main>
</template>
