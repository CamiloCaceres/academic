import { defineStore } from 'pinia'

// Do i really need this?
export const usePapersListStore = defineStore({
  id: 'List',
  state: () => ({
    papers: [],
  }),
})
