<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { createDocument } from '../db'

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
      new doc
    </h1>
    <div class="max-w-3xl text-left mx-auto">
      <InputLabel v-model="document.title">
        {{ t('label.title') }}
      </InputLabel>
      <InputLabel v-model="document.author">
        {{ t('label.author') }}
      </InputLabel>

      <p class="mt-5 text-gray-600 text-sm">
        {{ t('label.abstract') }}
      </p>
      <Editor v-model="document.abstract" class="cursor-text mt-4 ml-2" />
    </div>
    <button class="btn mt-5" @click="saveDocument">
      Send
    </button>
  </div>
</template>
