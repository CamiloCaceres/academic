<script setup lang="ts">

const isOpen = ref(true)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <div class=" mt-3 py-2 border-t-2 border-b-2 w-full ">
    <div class="flex justify-between items-center ">
      <div class="flex items-center space-x-1 cursor-pointer w-full " @click="toggleOpen">
        <p class="text-gray-800 font-medium text-lg">
          <slot name="title"></slot>
        </p>
        <ic:round-keyboard-arrow-down v-if="!isOpen" />
        <ic:round-keyboard-arrow-up v-if="isOpen" />
      </div>
      <button
        class="p-1 bg-white hover:bg-red-500  hover:text-white rounded-full z-40 text-red-300 focus:outline-none transition-all"
        @click="$emit('deleteFeature')"
      >
        <ic:round-delete-outline class="w-6 h-6" />
      </button>
    </div>
    <p v-show="isOpen" class="prose pl-2">
      <slot name="content"></slot>
    </p>
  </div>
</template>
