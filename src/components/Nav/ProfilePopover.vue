
<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '~/stores/userStore'

const userStore = useUserStore()

const { t } = useI18n()
const auth = getAuth()
const router = useRouter()

const name = ref(auth.currentUser?.displayName)

const signOutUser = async() => {
  try {
    await signOut(auth)
    userStore.resetUser()
    router.push('/auth')
  }
  catch (e) {
    // eslint-disable-next-line no-alert
    alert(e.message)
  }
}

</script>

<template>
  <Popover class="relative">
    <PopoverButton>
      <ic:round-person class="h-10 w-10 p-1 rounded-full bg-blue-300 text-blue-100" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute z-10 w-52 mt-5  bg-white right-1/2 sm:px-0 "
      >
        <div
          class="overflow-hidden text-left rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 "
        >
          <div class="w-full text-lg font-medium py-3 px-3 ">
            {{ t('hello') }}, {{ name }}
          </div>
          <div
            class="w-full text-base cursor-pointer py-2 px-5 hover:bg-gray-200"
            @click="router.push('/auth/Manageprofile')"
          >
            {{ t('button.profile') }}
          </div>

          <div
            class="w-full text-base cursor-pointer pt-2 pb-3 px-5 hover:bg-gray-200"
            @click="signOutUser"
          >
            {{ t('button.signout') }}
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
