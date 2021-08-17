<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc, collection } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { usersCollection, db } from '~/db'

// Validation
const user = reactive({
  name: '',
  email: '',
  password: '',
})
const rules = computed(() => ({
  name: { required },
  email: { required, email },
  password: {
    required,
    minLenght: minLength(6),
  },

}))
const v$ = useVuelidate(rules, user)

// Auth
const auth = getAuth()
const router = useRouter()

const handleSubmit = async(e: any) => {
  v$.value.$touch()
  if (!v$.value.$error) {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password).then((creds) => {
        if (auth.currentUser)
          updateProfile(auth.currentUser, { displayName: user.name })
          // creates Collections in Users.
          // needs refactoring!
        const userRef = doc(usersCollection, creds.user.uid)
        setDoc(userRef, { mail: creds.user.email, name: user.name })
        collection(db, `Users/${creds.user.uid}/papers`)
      })

      router.push('/')
    }
    catch (e) {
    // eslint-disable-next-line no-alert
      alert(e.message)
    }
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
      Sign Up
    </h1>
    <form class="flex flex-col space-y-5" @submit.prevent>
      <!-- Name -->
      <div class="relative w-full">
        <input
          v-model="user.name"
          class="peer input w-full pl-8"
          name="name"
          placeholder="name"
          type="string"
          @blur="v$.name.$touch"
        />
        <ic:round-person class="input-icon" />
      </div>
      <div v-if="v$.name.$error" class="text-red-400">
        Required field
      </div>
      <!-- Email -->
      <div class="relative w-full">
        <input
          v-model="user.email"
          class="peer input w-full pl-8"
          name="email"
          placeholder="email"
          type="email"
          @blur="v$.email.$touch"
        />
        <ic:round-mail-outline class="input-icon" />
      </div>
      <div v-if="v$.email.$error" class="text-red-400">
        Please enter a valid email
      </div>
      <!-- Password -->
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
      <div v-if="v$.password.$error" class="text-red-400">
        Password should be at least 6 characters long
      </div>
      <!-- Confirm password -->

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
      <div v-if="v$.password.$error" class="text-red-400">
        Passwords should match
      </div>
      <!-- Buttons -->
      <div class="flex flex-col space-y-1">
        <button class="btn" @click="handleSubmit">
          Sign Up
        </button>
        <p class="text-gray-500">
          or
        </p>
        <button class="btn-secondary" @click="router.push('/auth/login')">
          Login
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
