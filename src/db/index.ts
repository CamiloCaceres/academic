import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDYe4PJQAob2V9cKawDYIyN2ZGJ83r1aFU',
  authDomain: 'academic-repo.firebaseapp.com',
  projectId: 'academic-repo',
  storageBucket: 'academic-repo.appspot.com',
  messagingSenderId: '1003961640744',
  appId: '1:1003961640744:web:d3f1ebdf29a7f7a248d21d',
})

const db = getFirestore(firebaseApp)

// Document Collection
export const documentsCollection = collection(db, 'Documents')
export * from './documentsCollection'

// Auth
export * from './auth'
