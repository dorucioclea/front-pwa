import { WalletService, WalletProviderId } from '@superciety/pwa-core-library'
import { Config } from '../config'

export const getWalletService = (provider?: WalletProviderId) =>
  new WalletService(provider || 'empty', Config.Blockchain.WalletConfig)
