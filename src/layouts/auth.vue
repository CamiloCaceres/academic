<template>
  <main class="px-5 md:px-4 py-7 h-screen text-center text-gray-700 dark:text-gray-200 dark:bg-gray-800">
    <client-only>
      <router-view />
    </client-only>
  </main>
</template>
