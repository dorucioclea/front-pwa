import store from '../store'
import { handleAppResponse } from '@superciety/pwa-core-library'
import { UserPrivate } from './types'
import { storeAuthLogoutRequest } from './api'
import { getHttpService } from '../http'
import { logout } from './store/slice'

export const logoutUser = (onDone?: () => any) =>
  handleAppResponse(storeAuthLogoutRequest(getHttpService()), async () => {
    store.dispatch(logout())
    if (onDone) onDone()
  })

export const hasConnectedProvider = (user: UserPrivate | null, providerId: string) =>
  !!user ? Object.keys(user.connections).includes(providerId) : false
