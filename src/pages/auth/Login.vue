<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

// Auth logic
const auth = getAuth()
const router = useRouter()

const user = reactive({
  email: '',
  password: '',
})

const handleSubmit = async(e: any) => {
  try {
    await signInWithEmailAndPassword(auth, user.email, user.password)
    router.push('/')
  }
  catch (e) {
    // eslint-disable-next-line no-alert
    alert(e.message)
  }
}
// Password input field Hide/Show logic
const passField = ref()

const showPassword = ref(false)

const togglePasswordVisibility = () => {
  if (passField.value.type === 'password') {
    passField.value.type = 'text'
    showPassword.value = true
  }
  else {
    passField.value.type = 'password'
    showPassword.value = false
  }
}

</script>

<template>
  <div class="px-4 py-10 md:px-10 rounded-2xl shadow-xl w-full md:max-w-md mx-auto">
    <h1 class="mb-4 text-3xl font-medium text-gray-600">
      Login
    </h1>
    <form class="flex flex-col space-y-10" @submit.prevent>
      <div class="relative w-full">
        <input v-model="user.email" class="peer input w-full pl-8" name="email" placeholder="email" type="email" />
        <ic:round-mail-outline class="input-icon" />
      </div>

      <div class="relative w-full">
        <input
          ref="passField"
          v-model="user.password"
          class="peer input w-full pl-8"
          name="password"
          placeholder="password"
          type="password"
        />
        <ic:round-lock class="input-icon left-1 peer-focus:text-blue-500 " />
        <ic:sharp-visibility v-show="!showPassword" class="input-icon right-0 hover:text-blue-500 transition-all cursor-pointer" @click="togglePasswordVisibility" />
        <ic:sharp-visibility-off v-show="showPassword" class="input-icon right-0 hover:text-blue-500 transition-all cursor-pointer" @click="togglePasswordVisibility" />
      </div>

      <div class="flex flex-col space-y-1">
        <button class="btn" @click="handleSubmit">
          Login
        </button>
        <p class="text-gray-500">
          or
        </p>
        <button class="btn-secondary" @click="router.push('/auth/signup')">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  requiresUnauth: true
</route>
