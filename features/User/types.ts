import { SocialAccount, SocialAccountPlatform } from '@superciety/pwa-core-library'

export type UserPrivate = {
  address: string
  username: string | null
  name: string | null
  email: string
  connections: Record<SocialAccountPlatform, SocialAccount>
}

export type User = {
  address: string
  username: string | null
  name: string | null
  connections: Record<SocialAccountPlatform, SocialAccount>
}
