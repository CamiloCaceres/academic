<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import { useUserStore } from '~/stores/userStore'
import { usePaperStore } from '~/stores/paperStore'
import { usersPapersCollection, createPaper } from '~/db'

const router = useRouter()

const { t } = useI18n()
useHead({
  title: 'Add Paper',
  meta: [
    { name: 'description', content: 'Add new paper and abstract' },
  ],
})
// Stores
const user = useUserStore()
const paperStore = usePaperStore()

const paper = reactive({
  author: '',
  title: '',
  reference: '',
  url: '',
})

const addPaper = () => {
  const papersCollection = usersPapersCollection(user.uid)
  createPaper(papersCollection, paper).then((doc) => {
    paperStore.initialize(user.uid, doc.id)
    router.push(`/papers/${doc.id}`)
  })
}

// Validation
const rules = computed(() => ({
  author: { required },
  title: { required },
  reference: {
    required,
    minLenght: minLength(6),
  },
  url: { required },
}))

const v = useVuelidate(rules, paper)

</script>

<template>
  <div class="w-full max-w-2xl mx-auto sm:px-0">
    <div class="text-xl text-left pb-8 font-medium">
      {{ t('new.header') }}
    </div>
    <div
      class="bg-white rounded-xl p-1"
    >
      <div class="max-w-3xl text-left mx-auto flex flex-col space-y-1">
        <!-- Title -->
        <div>
          <div
            class="text-sm text-gray-600 ml-1"
            :class="v.title.$error ? 'text-red-500' : ''"
          >
            {{ t('new.title') }} *
          </div>
          <input
            v-model="paper.title"
            class="rounded-lg w-full "
            :class="v.title.$error ? 'border-red-400 focus:ring-red-400/60 focus:border-red-400' : ''"
            name="title"
            type="text"
            @blur="v.title.$touch"
          />
          <p class="text-right text-red-500 text-sm">
            {{ v.title.$error? 'Title is required' : '‎‏‏‎ ‎' }}
          </p>
        </div>
        <!-- Author -->
        <div>
          <div
            class="text-sm text-gray-600 ml-1"
            :class="v.author.$error ? 'text-red-500' : ''"
          >
            {{ t('new.author') }} *
          </div>
          <input
            v-model="paper.author"
            class="rounded-lg w-full "
            :class="v.author.$error ? 'border-red-400 focus:ring-red-400/60 focus:border-red-400' : ''"
            name="author"
            type="text"
            @blur="v.author.$touch"
          />
          <p class="text-right text-red-500 text-sm">
            {{ v.author.$error? 'Author is required' : '‎‏‏‎‎ ' }}
          </p>
        </div>
        <!-- Reference -->
        <!-- TODO: add info button, send to apa generating link -->
        <div class="">
          <div class="text-sm text-gray-600 ml-1">
            {{ t('new.reference') }}
          </div>
          <input v-model="paper.reference" class="rounded-lg w-full" name="reference" type="text" />
          <p class="text-sm">
            {{ '‎‏‏‎‎ ' }}
          </p>
        </div>
        <!-- URL to paper -->
        <div class="">
          <div class="text-sm text-gray-600 ml-1">
            {{ t('new.url') }}
          </div>
          <input v-model="paper.url" class="rounded-lg w-full" name="url" type="url" />
          <p class="text-sm">
            {{ '‎‏‏‎‎ ' }}
          </p>
        </div>
        <!-- Next Button -->
        <button
          class="w-min self-end text-center text-lg px-4 py-1.5 rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-700/95 transition-all"
          @click="addPaper"
        >
          {{ t('button.add') }}
        </button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  requiresAuth: true
</route>
