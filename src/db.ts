import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDYe4PJQAob2V9cKawDYIyN2ZGJ83r1aFU',
  authDomain: 'academic-repo.firebaseapp.com',
  projectId: 'academic-repo',
  storageBucket: 'academic-repo.appspot.com',
  messagingSenderId: '1003961640744',
  appId: '1:1003961640744:web:d3f1ebdf29a7f7a248d21d',
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const documentsCollection = db.collection('Documents')

export const createDocument = (document: any) => {
  return documentsCollection.add(document)
}

export const getDocument = async(id: any) => {
  const document = await documentsCollection.doc(id).get()
  return document.exists ? document.data() : null
}

export const updateDocument = (id: any, document: any) => {
  return documentsCollection.doc(id).update(document)
}

export const deleteDocument = (id: any) => {
  return documentsCollection.doc(id).delete()
}

export const useLoadDocuments = () => {
  const documents: any = ref([])
  const close = documentsCollection.onSnapshot((snapshot) => {
    documents.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return documents
}
