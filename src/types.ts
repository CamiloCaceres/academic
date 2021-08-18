import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type featureStateType = 'empty' | 'add' | 'display'

export interface User {
  uid: string
  name: string
  email: string
  age?: number
}
