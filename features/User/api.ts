import { IHttpService, ProofableLogin } from '@superciety/pwa-core-library'
import { UserPrivate } from './types'

export const getAuthProofableTokenRequest = async (http: IHttpService) => await http.get<{ token: string }>('auth/proofable')

export const storeAuthVerifyRequest = async (http: IHttpService, proofableLogin: ProofableLogin) =>
  await http.post<UserPrivate>('auth/verify', { signature: proofableLogin.signature, address: proofableLogin.address })

export const getMeRequest = async (http: IHttpService) => await http.get<UserPrivate>(`me`)

export const getFreeiamConnectUriRequest = async (http: IHttpService) =>
  await http.get<{ uri: string }>(`freeiam/connect-uri`)

export const storeFreeiamDisconnectRequest = async (http: IHttpService) => await http.post<UserPrivate>(`freeiam/disconnect`)
