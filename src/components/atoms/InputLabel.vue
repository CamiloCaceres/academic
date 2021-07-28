<script lang="ts" setup>

const emit = defineEmits(['update:modelValue'])
const vals = ref('')
</script>

<template>
  {{ vals }}
  <div class="relative mt-5">
    <input
      id="title"
      name="title"
      type="text"
      class="peer z-30 h-10 pt-2 p-1 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600"
      placeholder="Title"
      @input="emit('update:modelValue', $event?.target?.value)"
    />
    <label
      for="title"
      class="z-0 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
    >
      <slot></slot>
    </label>
  </div>
</template>
