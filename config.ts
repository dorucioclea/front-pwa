import { faHome, faInfo, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavigationItem } from '@superciety/pwa-core-library'

export const Config = {
  App: {
    Name: 'Superciety',
    Description: 'Buildinig the society of tomorrow on the Elrond blockchain.',
    Colors: {
      Teal: '#38B2AC',
    },
    Pages: {
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
    Authenticated: [{ text: 'me', href: '/i/me', icon: faUser }] as NavigationItem[],
  },
}
