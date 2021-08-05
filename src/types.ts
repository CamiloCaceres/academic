import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type featureStateType = 'empty' | 'add' | 'display'
