<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const router = useRouter()

</script>

<template>
  <nav class="mb-6 py-3 px-10 md:py-5 flex justify-between items-center sticky top-0 border-b border-gray-300/50 shadow-lg ">
    <!-- Home Button -->
    <div class="flex items-end cursor-pointer" @click="router.push('/')">
      <button class="icon-btn !outline-none">
        <icomoon-free:books class="h-8 w-8  text-black/95 " />
      </button>
      <p class="ml-4 text-lg md:text-xl ">
        Academic
      </p>
    </div>
    <!-- Mobile Hamburguer menu -->
    <ic:round-menu class="md:hidden" />
    <!-- Web Menu -->
    <div class="hidden md:flex space-x-8 items-center">
      <button
        class="px-3 py-1.5 rounded-md text-blue-600 font-medium hover:bg-blue-400/80 hover:text-gray-100 transition-all"
        @click="router.push('/doclist')"
      >
        {{ t('button.list') }}
      </button>
      <button
        class="px-3 py-1.5 rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-700/95 transition-all"
        @click="router.push('/newdoc')"
      >
        {{ t('button.new') }}
      </button>

      <profile-popover />
    </div>
  </nav>
</template>
