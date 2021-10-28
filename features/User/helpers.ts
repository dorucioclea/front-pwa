import { UserPrivate } from './types'

export const hasConnectedProvider = (user: UserPrivate | null, providerId: string) =>
  !!user ? Object.keys(user.connections).includes(providerId) : false
