<script setup lang="ts">
import { useLoadDocuments } from '~/db'

const docs = useLoadDocuments()

</script>

<template>
  <h2>List</h2>
  <p>{{ docs }}</p>
</template>
