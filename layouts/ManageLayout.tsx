import Header from '../features/Layout/Header'
import Footer from '../features/Layout/Footer'
import { SideNavigation, SideNavigationItem } from '@superciety/pwa-core-library'
import { faHandsHelping, faHome, faIdBadge } from '@fortawesome/free-solid-svg-icons'
import { Config } from '../config'

type Props = {
  heading: string
  children: any
}

const ManageLayout = (props: Props) => {
  const sideNavigation: SideNavigationItem[] = [
    {
      text: 'General',
      href: Config.App.Pages.Manage,
      icon: faHome,
      colorClassName: 'text-blue-500',
    },
    {
      text: 'Identity',
      href: Config.App.Pages.ManageIdentity,
      icon: faIdBadge,
      colorClassName: 'text-indigo-500',
    },
    {
      text: 'Fellowships',
      href: Config.App.Pages.ManageFellowship,
      icon: faHandsHelping,
      colorClassName: 'text-yellow-500',
    },
  ]

  // COMING SOON
  // const sideNavigationDevelopers: SideNavigationItem[] = [
  //   {
  //     text: 'Webhooks',
  //     href: Config.App.Pages.ManageWebhooks,
  //     icon: faWaveSquare,
  //     colorClassName: 'text-gray-900',
  //   },
  // ]

  return (
    <div className="overflow-hidden pb-24 mb:pb-0">
      <Header />
      <div className="flex flex-wrap max-w-8xl mx-auto md:pt-12 mb-20 md:mb-40">
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <SideNavigation items={sideNavigation} className="mb-4" />
          {/* <SideNavigation heading="Developers" items={sideNavigationDevelopers} /> */}
        </div>
        <main className="w-full md:w-2/3 lg:w-3/4 px-4 pt-8 md:pt-4">
          {props.heading && <h1 className="text-4xl mb-2">{props.heading}</h1>}
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ManageLayout
