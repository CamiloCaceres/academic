<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps({ content: String })

const editor = useEditor({
  extensions: [
    StarterKit,
  ],
  content: props.content,
  editable: false,
  editorProps: {
    attributes: {
      class:
            'focus:outline-none mx-auto text-left',
    },
  },
})
</script>

<template>
  <editor-content :editor="editor" />
</template>
