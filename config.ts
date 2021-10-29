import { faHome, faInfo, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavigationItem } from '@superciety/pwa-core-library'
import { SocialPlatformBarItem } from './features/Layout/SocialPlatformBar'
import { UserConnectionProvider } from './features/User/types'

export const Config = {
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

  Urls: {
    ApiBase: process.env.NEXT_PUBLIC_API_BASEURL || 'https://api.superciety.com',
    Developers: 'https://developers.superciety.com',
    Attributions: 'https://law.superciety.com/general/attributions.html',
    Freeiam: 'https://freeiam.com',
    Elrond: 'https://elrond.com',
  },

  Navigation: {
    Guest: [
      { text: 'start', href: '/', icon: faHome },
      { text: 'explore', href: '/explore', icon: faSearch },
      { text: 'explore', href: '/explore', icon: faSearch },
      { text: 'about', href: '/about', icon: faInfo },
    ] as NavigationItem[],
    Authenticated: [
      { text: 'manage', href: '/manage', icon: faUser },
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
      connectUrl: process.env.NEXT_PUBLIC_API_BASEURL + '/connect/github',
    },
    {
      id: 'twitter',
      label: 'Twitter',
      icon: faTwitter,
      colorCode: '#00acee',
      connectUrl: process.env.NEXT_PUBLIC_API_BASEURL + '/connect/twitter',
    },
  ] as UserConnectionProvider[],
}
