<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <button class="btn rounded-full p-2" @click="router.push('/')">
    <ic:round-home />
  </button>
</template>
