import { IHttpService } from '@superciety/pwa-core-library'
import { Identity } from './types'

export const getIdentityRequest = async (http: IHttpService, id: string) => await http.get<Identity>(`identity/${id}`)
