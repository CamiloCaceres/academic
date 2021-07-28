<script setup lang="ts">

const props = defineProps({ isOpen: Boolean })

</script>

<template>
  <button class="mt-5">
    <div v-if="!props.isOpen" class="flex items-center ">
      <ic:outline-add-circle-outline class="w-6 h-6 text-gray-500" />
      <p class="text-xs text-gray-600 px-3">
        Add <slot></slot>
      </p>
    </div>

    <div v-if="props.isOpen" class="flex items-center">
      <ic:outline-remove-circle-outline class="w-6 h-6 text-red-500" />
      <p class="text-xs text-red-600 px-3">
        Remove <slot></slot>
      </p>
    </div>
  </button>
</template>
