import store from './store'
import { WalletService, WalletProviderId, handleAppResponse } from '@superciety/pwa-core-library'
import { Config } from '../config'
import { getHttpService } from './http'
import { storeAuthLogoutRequest } from './User/api'
import { logout } from './User/store/slice'

var staticWallet: WalletService

export const getWalletService = (provider?: WalletProviderId) => {
  if (!staticWallet) {
    staticWallet = new WalletService(provider || null, Config.Blockchain.WalletConfig)
    staticWallet.onLogout = () =>
      handleAppResponse(storeAuthLogoutRequest(getHttpService()), async () => {
        store.dispatch(logout())
      })
  }

  return staticWallet
}
