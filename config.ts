import { faHome, faInfo, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { SocialPlatformBarItem } from './features/Layout/SocialPlatformBar'
import type { SocialAccountProvider, WalletServiceConfig, SmartContractConfig, NavigationItem } from '@superciety/pwa-core-library'

export const Config = {
  Urls: {
    ApiBase: process.env.NEXT_PUBLIC_API_BASEURL || 'https://api.superciety.com',
    Developers: 'https://developers.superciety.com',
    Attributions: 'https://law.superciety.com/general/attributions.html',
    Freeiam: 'https://freeiam.com',
    Elrond: 'https://elrond.com',
    ElrondExplorer: process.env.NEXT_PUBLIC_ELROND_EXPLORER || 'https://explorer.elrond.com',
    ElrondWallet: process.env.NEXT_PUBLIC_ELROND_WALLET || 'https://wallet.elrond.com',
  },

  Blockchain: {
    WalletConfig: {
      GatewayAddress: 'https://testnet-gateway.elrond.com',
      WebWalletUrl: 'https://testnet-wallet.elrond.com/dapp/init',
      WalletConnectBridge: 'https://bridge.walletconnect.org',
      WalletConnectDeepLink: 'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/',
    } as WalletServiceConfig,
    SmartContracts: {
      Distribution: {
        Address: '',
        Functions: {
          Buy: {
            FunctionName: 'buy',
            GasLimit: 0,
          }
        },
      } as SmartContractConfig,
    }
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
      { label: 'Discord', icon: faDiscord, colorHex: '#7289da', href: 'http://superciety.chat' },
      { label: 'Twitter', icon: faTwitter, colorHex: '#00acee', href: 'https://twitter.com/SupercietyHQ' },
    ] as SocialPlatformBarItem[],
  },

  ConnectionProviders: [
    {
      id: 'github',
      label: 'Github',
      icon: faGithub,
      colorCode: '#000',
      connectUrl: 'https://api.superciety.com/connect/github',
    },
    {
      id: 'twitter',
      label: 'Twitter',
      icon: faTwitter,
      colorCode: '#00acee',
      connectUrl: 'https://api.superciety.com/connect/twitter',
    },
  ] as SocialAccountProvider[],
}
