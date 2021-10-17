import Navigation from '../features/Layout/Navigation'
import SideNavigation, { SideNavigationItem } from '../features/Layout/SideNavigation'
import { faHandsHelping, faIdBadge, faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import { Config } from '../config'

type Props = {
  heading?: string
  children: any
}

const ManageLayout = (props: Props) => {
  const sideNavigation: SideNavigationItem[] = [
    {
      name: 'Identity',
      href: Config.App.Pages.ManageIdentity,
      icon: faIdBadge,
      colorClassName: 'text-indigo-500',
    },
    {
      name: 'Fellowships',
      href: Config.App.Pages.ManageFellowship,
      icon: faHandsHelping,
      colorClassName: 'text-yellow-500',
    },
  ]

  const sideNavigationDevelopers: SideNavigationItem[] = [
    {
      name: 'Webhooks',
      href: Config.App.Pages.ManageWebhooks,
      icon: faWaveSquare,
      colorClassName: 'text-gray-900',
    },
  ]

  return (
    <>
      <Navigation />
      <div className="flex max-w-8xl mx-auto pt-12">
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <SideNavigation items={sideNavigation} className="mb-4" />
          <SideNavigation heading="Developers" items={sideNavigationDevelopers} />
        </div>
        <main className="w-full md:w-2/3 lg:w-3/4 p-4">
          {props.heading && <h2>{props.heading}</h2>}
          {props.children}
        </main>
      </div>
      <footer></footer>
    </>
  )
}

export default ManageLayout
