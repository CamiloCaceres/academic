<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usersPapersCollection, createPaper } from '~/db'
import { useUserStore } from '~/stores/userStore'

const { t } = useI18n()

const user = useUserStore()

const testAdd = () => {
  const papersCollection = usersPapersCollection(user.uid)
  createPaper(papersCollection, { test: 'test1' })
}

</script>

<template>
  <div>
    <p class="text-4xl">
      <icomoon-free:books class="inline-block" />
    </p>
    <p>
      {{ t('intro.academic') }}
    </p>

    <!-- <p class="text-sm z-0 opacity-75">
      {{ t('intro.desc') }}
    </p> -->
    <p>{{ t('intro.welcome', {name:user.name}) }}</p>
    <p>{{ user.email }}</p>

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
