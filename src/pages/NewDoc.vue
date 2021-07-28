<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { createDocument } from '../db'
import AbstractEditor from '~/components/NewDoc/AbstractEditor.vue'

const { t } = useI18n()

useHead({
  title: 'New Document',
  meta: [
    { name: 'description', content: 'Add new document and abstract' },
  ],
})

interface Document {
  title: string
  author: string
  abstract?: string
  categories?: [string]
  review?: string
  adedBy?: string
  // TODO: add Reference(apa support)
}

const document: Document = reactive({
  author: '',
  title: '',
})

const saveDocument = async() => {
  await createDocument({ ...document })
}

</script>

<!-- TODO:
Add more info *(date, book, pag => apa)
Editor de Abstract en un modal y con nombre para el autor del abstract
Link para dl el articulo -->

<template>
  <div>
    <h1 class="text-2xl mb-5">
      {{ t('new.header') }}
    </h1>
    <div class="max-w-3xl text-left mx-auto">
      <InputLabel v-model="document.title">
        {{ t('new.title') }}
      </InputLabel>

      <InputLabel v-model="document.author">
        {{ t('new.author') }}
      </InputLabel>

      <!-- el abstract se escribe en un modal de pantalla completa?
      aqui se muestra truncated solo el inicio pero se guarda completo en el v-modal -->
      <AddFeature>
        Add Abstract
      </AddFeature>

      <p class="mt-5 text-gray-600 text-sm">
        {{ t('new.abstract') }}
      </p>
      <AbstractEditor v-model="document.abstract" class="cursor-text mt-4 ml-2" />
    </div>

    <button class="btn mt-5" @click="saveDocument">
      {{ t('button.save') }}
    </button>
  </div>
</template>
