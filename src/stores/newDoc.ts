import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
export const useNewDocStore = defineStore({
  id: 'newDoc',
  state: () => ({
    abstract: '',
    review: '',
    notes: '',
    categories: [],
    quotes: [],
    reference: '',
  }),
})
