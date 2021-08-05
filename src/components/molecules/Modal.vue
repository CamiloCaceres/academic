<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

// modal

const props = defineProps({
  featureState: String,
})

</script>

<template>
  <div>
    <TransitionRoot appear :show="props.featureState === 'add'" as="template">
      <Dialog as="div" @close="$emit('closeModal')">
        <div class="fixed inset-0 z-40 overflow-y-auto">
          <div class="min-h-screen px-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay class="fixed inset-0 bg-black opacity-40" />
            </TransitionChild>

            <span class="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>

            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <div
                class="relative h-[90vh] inline-block w-full max-w-md md:max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
              >
                <DialogTitle
                  as="h3"
                  class="text-xl text-center font-medium leading-6 text-gray-900"
                >
                  <slot name="title">
                    Def tit
                  </slot>
                </DialogTitle>
                <div class="mt-8">
                  <p class="text-sm text-gray-500">
                    <slot name="body">
                      Default Bod
                    </slot>
                  </p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class=" absolute bottom-3 right-3 inline-flex justify-center rounded-full p-1 text-sm font-medium text-teal-200 bg-teal-600 border border-transparent hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
                    @click="$emit('closeModal')"
                  >
                    <ic:round-check class="h-8 w-8" />
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
