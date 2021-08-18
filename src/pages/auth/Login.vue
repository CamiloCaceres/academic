<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

// Validation
const user = reactive({
  email: '',
  password: '',
})
const rules = {
  email: { required, email },
  password: { required },

}
const v$ = useVuelidate(rules, user)

// Auth
const auth = getAuth()
const router = useRouter()
const handleSubmit = async(e: any) => {
  v$.value.$touch()
  if (!v$.value.$error) {
    try {
      await setPersistence(auth, browserLocalPersistence)
        .then(() => {
          return signInWithEmailAndPassword(auth, user.email, user.password)
        })
      router.push('/')
    }
    catch (e) {
    // eslint-disable-next-line no-alert
      alert(e.message)
    }
  }
}

// Password input field Hide/Show
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
  <div class="px-4 py-5 md:px-10 rounded-2xl shadow-xl w-full md:max-w-md mx-auto">
    <h1 class="mb-4 text-3xl font-medium text-gray-600">
      Login
    </h1>
    <form class="flex flex-col space-y-5" @submit.prevent>
      <div class="relative w-full">
        <input
          v-model="user.email"
          class="peer input w-full pl-8"
          name="email"
          placeholder="email"
          type="email"
          @blur="v$.email.$touch"
        />

        <ic:round-mail-outline class="input-icon left-1 peer-focus:text-blue-500" />
      </div>
      <div v-if="v$.email.$error" class="text-red-400">
        Please enter a valid email
      </div>
      <div class="relative w-full">
        <input
          ref="passField"
          v-model="user.password"
          class="peer input w-full pl-8"
          name="password"
          placeholder="password"
          type="password"
          @blur="v$.password.$touch"
        />

        <ic:round-lock class="input-icon left-1 peer-focus:text-blue-500 " />
        <ic:sharp-visibility v-show="!showPassword" class="input-icon right-0 hover:text-blue-500 transition-all cursor-pointer" @click="togglePasswordVisibility" />
        <ic:sharp-visibility-off v-show="showPassword" class="input-icon right-0 hover:text-blue-500 transition-all cursor-pointer" @click="togglePasswordVisibility" />
      </div>
      <div v-if="v$.password.$error" class="text-red-400">
        Password empty
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
  layout: auth
  requiresUnauth: true
</route>
