import { IHttpService } from '@superciety/pwa-core-library'
import { User, UserPrivate } from './types'

export const storeAuthRequest = async (http: IHttpService, message: string, signature: string, signer: string) =>
  await http.post<UserPrivate>('auth', { message, signature, signer })

export const getUserRequest = async (http: IHttpService) => await http.get<User>(`user`)
