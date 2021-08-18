<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-2 sm:px-0">
    <TabGroup>
      <TabPanels class="mt-2">
        <TabPanel
          class="bg-white rounded-xl p-3"
        >
        </TabPanel>
      </TabPanels>
      <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        <Tab
          v-slot="{ selected }"
          as="template"
        >
          <button
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            1
          </button>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>
