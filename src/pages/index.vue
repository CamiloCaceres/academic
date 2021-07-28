<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const router = useRouter()

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
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  </route>
