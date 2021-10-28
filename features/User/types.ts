import { IconDefinition } from '@fortawesome/fontawesome-common-types'

export type UserPrivate = {
  address: string
  username: string | null
  name: string | null
  email: string
  connections: UserConnection[]
}

export type User = {
  address: string
  username: string | null
  name: string | null
  connections: UserConnection[]
}

export type UserConnection = {
  platform: string
  username: string
  link: string
}

export type UserConnectionProvider = {
  id: string
  label: string
  icon: IconDefinition
  colorCode: string
  connectUrl: string
}
