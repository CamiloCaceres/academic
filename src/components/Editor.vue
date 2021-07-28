<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const wordCount = ref(0)

const output = ref('')

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  extensions: [
    StarterKit,
  ],
  editorProps: {
    attributes: {
      class:
        'm-5 focus:outline-none mx-auto text-left',
    },
  },
  onUpdate({ editor }) {
    wordCount.value = editor.state.doc.textContent.split(' ').length
    output.value = editor.getHTML()
    emit('update:modelValue', output.value)
  },
})
</script>

<template>
  <editor-content :editor="editor" class="border-l-2 border-gray-300 pl-2" />
  <div class="text-right text-sm text-gray-600">
    {{ wordCount }} words
  </div>
</template>
