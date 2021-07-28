<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const open = ref(false)

</script>

<template>
  <div>
    <AddFeatureButton :open="open" @click="open = !open">
      {{ t('new.quotes') }}
    </AddFeatureButton>

    <div v-show="open">
      <p class="mt-5 text-gray-600 text-sm">
        {{ t('new.quotes') }}
      </p>
    </div>
  </div>
</template>
