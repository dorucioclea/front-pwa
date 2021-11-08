import type { WalletServiceConfig } from '@superciety/pwa-core-library'
import { faHome, faInfo, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavigationItem } from '@superciety/pwa-core-library'
import { SocialPlatformBarItem } from './features/Layout/SocialPlatformBar'
import { UserConnectionProvider } from './features/User/types'

export const Config = {
  Urls: {
    ApiBase: 'https://api.superciety.com',
    Developers: 'https://developers.superciety.com',
    Attributions: 'https://law.superciety.com/general/attributions.html',
    Freeiam: 'https://freeiam.com',
    Elrond: 'https://elrond.com',
  },

  Blockchain: {
    SmartContracts: {
      Identity: 'erd1qqqqqqqqqqqqqpgqqfyc3d6xrc2e7p86lnrqk033gt52253hyt2ss9fdhk',
    },
    WalletConfig: {
      GatewayAddress: 'https://testnet-gateway.elrond.com',
      WebWalletUrl: 'https://testnet-wallet.elrond.com/dapp/init',
      WalletConnectBridge: 'https://bridge.walletconnect.org',
      WalletConnectDeepLink: 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/',
    } as WalletServiceConfig,
  },

  App: {
    Name: 'Superciety',
    Description: 'Buildinig the society of tomorrow on the Elrond blockchain.',
    Colors: {
      Teal: '#4fd1c5',
      FreeiamPrimary: '#ed3258',
    },
    Pages: {
      Auth: '/',
      Manage: '/manage',
      ManageIdentity: '/manage/identity',
      ManageFellowship: '/manage/fellowship',
      ManageWebhooks: '/manage/webhooks',
    },
  },

  Navigation: {
    Guest: [
      { text: 'start', href: '/', icon: faHome },
      { text: 'explore', href: '/explore', icon: faSearch },
      { text: 'explore', href: '/explore', icon: faSearch },
      { text: 'about', href: '/about', icon: faInfo },
    ] as NavigationItem[],
    Authenticated: [
      { text: 'quests', href: '/explore/quests', icon: faUser },
      { text: 'me', href: '/identify/me', icon: faUser },
    ] as NavigationItem[],
  },

  Footer: {
    Socials: [
      { label: 'Discord', icon: faDiscord, colorHex: '#7289da', href: 'http://freeiam.chat' },
      { label: 'Twitter', icon: faTwitter, colorHex: '#00acee', href: 'https://twitter.com/SupercietyHQ' },
    ] as SocialPlatformBarItem[],
  },

  ConnectionProviders: [
    {
      id: 'github',
      label: 'Github',
      icon: faGithub,
      colorCode: '#000',
    },
    {
      id: 'twitter',
      label: 'Twitter',
      icon: faTwitter,
      colorCode: '#00acee',
    },
  ] as UserConnectionProvider[],
}
