import Link from 'next/link'
import AuthButton from '../Auth/AuthButton'
import ManageHeaderButton from '../Manage/ManageHeaderButton'
import { Config } from '../../config'
import { useAppSelector } from '../store'
import { selectUserLoggedIn } from '../User/store/selectors'
import { getWalletService } from '../wallet'
import { logoutUser } from '../User/helpers'
import { classNames, DisconnectButton, Navigation, NavigationMobile } from '@superciety/pwa-core-library'

type Props = {
  black?: boolean
  disableNavigation?: boolean
}

const Header = (props: Props) => {
  const isLoggedIn = useAppSelector(selectUserLoggedIn)
  const navItems = isLoggedIn ? Config.Navigation.Authenticated : Config.Navigation.Guest

  const handleLogoutRequest = () => logoutUser(async () => await getWalletService().logout())

  return (
    <header
      className={classNames('py-3 px-2 md:px-8 w-full flex justify-between items-center', props.black ? 'bg-black' : '')}
    >
      <Link href="/">
        <a className="flex items-center">
          <img src={props.black ? '/images/logo-white.png' : '/images/logo.png'} className="block mr-1 md:mr-2 w-12 h-12" />
          <span
            className={classNames('font-head text-2xl uppercase tracking-widest', props.black ? 'text-white' : 'text-black')}
          >
            {Config.App.Name}
          </span>
        </a>
      </Link>
      {!props.disableNavigation && <Navigation items={navItems} className="hidden md:block" />}
      <div className="flex justify-end sm:w-20 md:w-32 lg:w-56 xl:w-64">
        {isLoggedIn ? (
          <div className="flex items-center space-x-6">
            <ManageHeaderButton dark={props.black} />
            <DisconnectButton onClick={handleLogoutRequest} />
          </div>
        ) : (
          <AuthButton />
        )}
      </div>
      {!props.disableNavigation && <NavigationMobile items={navItems} />}
    </header>
  )
}

export default Header
