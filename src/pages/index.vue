<script setup lang="ts">
import { getAuth } from 'firebase/auth'
import { useI18n } from 'vue-i18n'
import { usersPapersCollection, createPaper } from '~/db'

const { t } = useI18n()

const auth = getAuth()

const user = auth.currentUser

const testAdd = () => {
  const papersCollection = usersPapersCollection(user?.uid)
  createPaper(papersCollection, { test: 'test1' })
}

</script>

<template>
  <div>
    <p class="text-4xl">
      <icomoon-free:books class="inline-block" />
    </p>
    <p>
      Academic
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>
    <p>Welcome {{ user?.displayName }}</p>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="testAdd"
      >
        Test add
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
</route>
