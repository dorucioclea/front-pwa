import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export type UserConnectionPlatform = 'freeiam' | 'github' | 'twitter'

export type UserPrivate = {
  address: string
  username: string | null
  name: string | null
  email: string
  connections: Record<UserConnectionPlatform, UserConnectionData>
}

export type User = {
  address: string
  username: string | null
  name: string | null
  connections: UserConnectionData[]
}

export type UserConnectionData = {
  platform: string
  username: string
  link: string
}

export type UserConnectionProvider = {
  id: UserConnectionPlatform
  label: string
  icon: IconDefinition
  colorCode: string
}
