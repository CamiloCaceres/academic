<script setup lang="ts">
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '~/logic'

const router = useRouter()

</script>

<template>
  <nav class="text-xl mb-6 flex justify-center items-center">
    <button class="icon-btn mx-2 !outline-none" @click="router.push('/')">
      <icomoon-free:books class="inline-block" />
    </button>
    <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>
  </nav>
</template>
