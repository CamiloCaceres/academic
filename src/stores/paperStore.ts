import { defineStore } from 'pinia'
import { usersPapersCollection, getPaper } from '~/db'

// useStore could be anything like useUser, useCart
export const usePaperStore = defineStore({
  id: 'Paper',
  state: () => ({
    uid: '',
    author: '',
    title: '',
    reference: '',
    url: '',
    abstract: '',
    review: '',
    notes: '',
    categories: [],
    quotes: [],
    // User uid
    createdBy: '',
  }),
  actions: {
    async initialize(userId: any, paperId: any) {
      const collection = usersPapersCollection(userId)
      await getPaper(paperId, collection).then((doc) => {
        this.uid = paperId
        this.author = doc?.document.author
        this.title = doc?.document.title
        this.reference = doc?.document.reference
        this.url = doc?.document.url
        this.abstract = doc?.document.abstract
        this.review = doc?.document.review
        this.notes = doc?.document.notes
        this.categories = doc?.document.categories
        this.quotes = doc?.document.quotes
        this.createdBy = doc?.document.createdBy
      })
    },
  },
})
