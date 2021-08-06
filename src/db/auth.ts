import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseApp } from '.'

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(firebaseApp), resolve, reject),
  )

export const useAuthState = () => {
  const user = ref()
  const error = ref()

  const auth = getAuth()
  let unsubscribe: any
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e),
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated }
}
