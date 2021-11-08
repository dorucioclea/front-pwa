import { WalletService, WalletProviderId } from '@superciety/pwa-core-library'
import { Config } from '../config'
import { logoutUser } from './User/helpers'

var staticWallet: WalletService

export const getWalletService = (provider?: WalletProviderId) => {
  if (!staticWallet) {
    staticWallet = new WalletService(provider || null, Config.Blockchain.WalletConfig)

    staticWallet.onLogout = logoutUser

    staticWallet.init()
  }

  return staticWallet
}
