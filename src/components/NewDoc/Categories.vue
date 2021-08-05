<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { featureStateType } from '~/types'

const featureState = ref<featureStateType>('empty')

const setState = (newState: featureStateType) => {
  featureState.value = newState
}
const categories = ref('')

const deleteFeature = () => {
  featureState.value = 'empty'
  categories.value = ''
}

const { t } = useI18n()

</script>

<template>
  <div>
    <AddFeatureButton v-if="featureState == 'empty'" @click="setState('add')">
      {{ t('new.categories') }}
    </AddFeatureButton>

    <Modal :feature-state="featureState" @closeModal="setState('display')">
      <template #title>
        <h1>title</h1>
      </template>
      <template #body>
        <Editor v-model="categories" class="cursor-text mt-4 ml-2" />
      </template>
    </Modal>

    <div v-if="featureState == 'display'">
      <DisplayFeature @deleteFeature="deleteFeature">
        <template #title>
          {{ t('new.categories') }}
        </template>
        <template #content>
          <ReadOnlyEditor :content="categories" />
        </template>
      </DisplayFeature>
    </div>
  </div>
</template>
