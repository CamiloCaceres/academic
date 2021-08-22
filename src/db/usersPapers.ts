import { getDoc, doc } from 'firebase/firestore'

export const getPaper = async(id: any, collection: any) => {
  const document = await getDoc(doc(collection, id))
  return document.exists() ? document.data() : null
}
