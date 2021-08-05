<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { featureStateType } from '~/types'

const featureState = ref<featureStateType>('empty')

const setState = (newState: featureStateType) => {
  featureState.value = newState
}
const review = ref('')

const deleteFeature = () => {
  featureState.value = 'empty'
  review.value = ''
}

const { t } = useI18n()

</script>

<template>
  <div>
    <AddFeatureButton v-if="featureState == 'empty'" @click="setState('add')">
      {{ t('new.review') }}
    </AddFeatureButton>

    <Modal :feature-state="featureState" @closeModal="setState('display')">
      <template #title>
        <h1>
          {{ t('new.review') }}
        </h1>
      </template>
      <template #body>
        <Editor v-model="review" class="cursor-text mt-4 ml-2" />
      </template>
    </Modal>

    <div v-if="featureState == 'display'">
      <DisplayFeature @deleteFeature="deleteFeature">
        <template #title>
          {{ t('new.review') }}
        </template>
        <template #content>
          <ReadOnlyEditor :content="review" />
        </template>
      </DisplayFeature>
    </div>
  </div>
</template>
