<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const auth = getAuth()
const router = useRouter()

const handleSubmit = async(e: any) => {
  const { email, password } = e.target.elements
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  }
  catch (e) {
    // eslint-disable-next-line no-alert
    alert(e.message)
  }
}
</script>

<template>
  <div class="px-4 py-10 md:px-10 rounded-2xl shadow-xl w-full md:max-w-md mx-auto">
    <h1 class="mb-4 text-3xl font-medium text-gray-600">
      Sign Up
    </h1>
    <form class="flex flex-col space-y-10" @submit.prevent>
      <div class="relative w-full">
        <input class="peer input w-full pl-8" name="email" placeholder="email" type="email" />
        <ic:round-mail-outline class="input-icon" />
      </div>

      <div class="relative w-full">
        <input class="peer input w-full pl-8" name="password" placeholder="password" type="password" />
        <ic:round-lock class="input-icon" />
      </div>

      <div class="flex flex-col space-y-1">
        <button class="btn" @click="handleSubmit">
          Sign Up
        </button>
        <p class="text-gray-500">
          or
        </p>
        <button class="btn-secondary" @click="router.push('/login')">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

    <route lang="yaml">
meta:
  requiresUnauth: true
    </route>
