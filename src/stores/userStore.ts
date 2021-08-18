import { defineStore } from 'pinia'
import { getAuth } from 'firebase/auth'

const auth = getAuth()

// useStore could be anything like useUser, useCart
export const useUserStore = defineStore({
  id: 'User',
  state: () => ({
    isLoggedIn: false,
    uid: auth.currentUser?.uid,
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
    age: 0,
  }),
  actions: {
    setUser() {
      this.uid = auth.currentUser?.uid
      this.name = auth.currentUser?.displayName
      this.email = auth.currentUser?.email
      this.isLoggedIn = true
    },

    resetUser() {
      this.isLoggedIn = false
      this.uid = ''
      this.name = ''
      this.email = ''
      this.age = 0
    },

  },
})
