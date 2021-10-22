import { IHttpService } from '@superciety/pwa-core-library'
import { ProofableLogin } from '@superciety/pwa-core-library/lib/services/auth'
import { User, UserPrivate } from './types'

export const getAuthProofableToken = async (http: IHttpService) => await http.get<{ token: string }>('auth/proofable')

export const storeAuthVerifyRequest = async (http: IHttpService, proofableLogin: ProofableLogin) =>
  await http.post<UserPrivate>('auth/verify', { signature: proofableLogin.signature, signer: proofableLogin.signer })

export const getUserRequest = async (http: IHttpService) => await http.get<User>(`user`)
