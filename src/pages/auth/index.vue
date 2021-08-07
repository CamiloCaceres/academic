<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

</script>

<template>
  <div class="px-4 py-10 md:px-10 rounded-2xl shadow-xl w-full md:max-w-md mx-auto">
    <h1 class="mb-4 text-3xl font-medium text-gray-600">
      Welcome
    </h1>
    <div class="flex flex-col space-y-10">
      <div class="flex flex-col space-y-1">
        <button class="btn" @click="router.push('/auth/login')">
          Login
        </button>
        <p class="text-gray-500">
          or
        </p>
        <button class="btn-secondary" @click="router.push('/auth/signup')">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

    <route lang="yaml">
meta:
  requiresUnauth: true
    </route>
