<script setup lang="ts">
import { getAuth, updateProfile } from 'firebase/auth'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const auth = getAuth()

const name = ref('')
const addInfo = () => {
  if (auth.currentUser) {
    updateProfile(auth.currentUser, {
      displayName: name.value,
    })
  }
}

</script>

<template>
  <div class="px-4 py-10 md:px-10 rounded-2xl shadow-xl w-full md:max-w-xl mx-auto">
    <h1>Welcome!</h1>
    <h2>
    </h2>
    <form class="flex flex-col space-y-10" @submit.prevent>
      <div class="relative w-full">
        <input v-model="name" class="peer input w-full pl-8" name="name" placeholder="name" type="string" />
        <ic:round-person class="input-icon" />
      </div>
      <button class="btn" @click="addInfo">
        {{ t('button.save') }}
      </button>
    </form>
    <HomeButton />
  </div>
</template>

    <route lang="yaml">
meta:
  layout: home
  requiresAuth: true
    </route>
