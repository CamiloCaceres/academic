<script setup lang="ts">

</script>

<template>
  <button class="flex items-center mt-5">
    <ic:outline-add-circle-outline class="w-7 h-7 text-gray-400" />
    <p class="text-sm text-gray-500 px-3">
      <slot></slot>
    </p>
  </button>
</template>
