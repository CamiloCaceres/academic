<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePaperStore } from '~/stores/paperStore'
// const props = defineProps<{ id: string }>()
const router = useRouter()
const { t } = useI18n()

const paper = usePaperStore()
// Display all features from paperStore
// Methods to setDoc on firestore to update document with new features
// edit current paper button
</script>

<template>
  <div>
    hi
  </div>
  <div>
    {{ paper.title }}
  </div>
</template>
