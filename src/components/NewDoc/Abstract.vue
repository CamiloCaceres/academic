<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { featureStateType } from '~/types'
// import { useNewDocStore } from '~/stores/newDoc'

// // Store
// const newDoc = useNewDocStore()

const abstract = ref('')

// Feature state
const featureState = ref<featureStateType>('empty')

const setState = (newState: featureStateType) => {
  featureState.value = newState
}

const deleteFeature = () => {
  featureState.value = 'empty'
  abstract.value = ''
}

// Store logic
// watchEffect(() => {
//   newDoc.$patch({ abstract: abstract.value })
// })

const { t } = useI18n()

</script>

<template>
  <div>
    <AddFeatureButton v-if="featureState == 'empty'" @click="setState('add')">
      {{ t('new.abstract') }}
    </AddFeatureButton>

    <Modal :feature-state="featureState" @closeModal="setState('display')">
      <template #title>
        <h1>
          {{ t('new.abstract') }}
        </h1>
      </template>
      <template #body>
        <Editor v-model="abstract" class="cursor-text mt-4 ml-2" />
      </template>
    </Modal>

    <div v-if="featureState == 'display'">
      <DisplayFeature @deleteFeature="deleteFeature">
        <template #title>
          {{ t('new.abstract') }}
        </template>
        <template #content>
          <ReadOnlyEditor :content="abstract" />
        </template>
      </DisplayFeature>
    </div>
  </div>
</template>
