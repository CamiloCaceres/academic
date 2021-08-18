import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDoc, doc } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDYe4PJQAob2V9cKawDYIyN2ZGJ83r1aFU',
  authDomain: 'academic-repo.firebaseapp.com',
  projectId: 'academic-repo',
  storageBucket: 'academic-repo.appspot.com',
  messagingSenderId: '1003961640744',
  appId: '1:1003961640744:web:d3f1ebdf29a7f7a248d21d',
})

export const db = getFirestore(firebaseApp)

// Document Collection
export const documentsCollection = collection(db, 'Documents')
export * from './documentsCollection'

// Users Collection
export const usersCollection = collection(db, 'Users')

export const usersPapersCollection = (userId: any) => {
  return collection(db, `Users/${userId}/papers`)
}

// creates papers collection by adding a document
export const createPaper = (collection: any, document: any) => {
  return addDoc(collection, { document })
}

export const getPaper = async(id: any, collection: any) => {
  const document = await getDoc(doc(collection, id))
  return document.exists() ? document.data() : null
}

// Auth
export * from './auth'
