<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAuthState } from '~/db'

const { t } = useI18n()

const router = useRouter()

const { user } = useAuthState()
const auth = getAuth()

const signOutUser = async() => {
  try {
    await signOut(auth)
    router.push('/login')
  }
  catch (e) {
    alert(e.message)
  }
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

    <div class="py-4" />

    <div>
      <button
        class="m-3 text-sm btn"
        @click="router.push('/newdoc')"
      >
        {{ t('button.new') }}
      </button>

      <button
        class="m-3 text-sm btn"
        @click="router.push('/doclist')"
      >
        {{ t('button.list') }}
      </button>
      <h1>Welcome {{ user?.email }}!</h1>
      <button
        class="m-3 text-sm btn"
        @click="signOutUser"
      >
        {{ t('button.signout') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
</route>
