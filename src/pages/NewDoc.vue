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
      {{ t('new.header') }}
    </h1>
    <div class="max-w-3xl text-left mx-auto">
      <input v-model="document.title" class="input w-full my-2" name="title" :placeholder="t('new.title')" type="email" />
      <input v-model="document.author" class="input w-full my-2" name="author" :placeholder="t('new.author')" type="email" />

      <Abstract />

      <Review />

      <Categories />

      <Quotes />

      <Reference />

      <Notes />
    </div>

    <button class="btn mt-5" @click="saveDocument">
      {{ t('button.save') }}
    </button>
  </div>
</template>
