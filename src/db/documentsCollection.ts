import { doc, getDoc, onSnapshot, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { documentsCollection } from './index'

// Documents Collection

export const createDocument = (document: any) => {
  // do i return or no?
  return addDoc(documentsCollection, { document })
}

export const getDocument = async(id: any) => {
  const document = await getDoc(doc(documentsCollection, id))
  return document.exists() ? document.data() : null
}

export const updateDocument = (id: any, document: any) => {
  return updateDoc(doc(documentsCollection, id), { document })
}

export const deleteDocument = (id: any) => {
  return deleteDoc(doc(documentsCollection, id))
}

export const useLoadDocuments = () => {
  const documents: any = ref([])
  // /  const close = documentsCollection.onSnapshot((snapshot) => {
  const close = onSnapshot(documentsCollection, (snapshot) => {
    documents.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return documents
}
