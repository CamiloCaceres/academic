<script setup lang="ts">
import { useHead } from '@vueuse/head'
// import { useLoadDocuments } from './db'

// const docs = useLoadDocuments()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'AcademicRepo',
  meta: [
    { name: 'description', content: 'Text tracker for the academic papers you have read' },
  ],
})
</script>

<template>
  <main class=" h-screen text-center text-gray-700 dark:text-gray-200 dark:bg-gray-800">
    <client-only>
      <router-view />
    </client-only>
  </main>
</template>
