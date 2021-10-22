import { HttpService } from '@superciety/pwa-core-library'
import { Config } from '../config'

export const getHttpService = () => {
  const httpService = new HttpService(Config.Urls.ApiBase)

  // todo: add httpservice response hooks

  return httpService
}
