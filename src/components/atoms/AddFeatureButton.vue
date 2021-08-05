<script setup lang="ts">

</script>

<template>
  <button class="mt-5">
    <div class="flex items-center ">
      <ic:outline-add-circle-outline class="w-6 h-6 text-gray-500" />
      <p class="text-xs text-gray-600 px-3">
        Add <slot></slot>
      </p>
    </div>
  </button>
</template>
