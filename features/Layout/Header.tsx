import { Config } from '../../config'
import { getHttpService } from '../http'
import { getAuthProofableToken, storeAuthVerifyRequest } from '../User/api'
import { useAppDispatch, useAppSelector } from '../store'
import { login, logout } from '../User/store/slice'
import { selectUserLoggedIn } from '../User/store/selectors'
import {
  ConnectButton,
  DisconnectButton,
  handleAppResponse,
  Navigation,
  NavigationMobile,
  ProofableLogin,
} from '@superciety/pwa-core-library'

const Header = () => {
  const httpService = getHttpService()
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(selectUserLoggedIn)
  const navItems = isLoggedIn ? Config.Navigation.Authenticated : Config.Navigation.Guest

  const handleProofableTokenRequest = async () => (await getAuthProofableToken(httpService)).data.token

  const handleProofableLogin = (proofableLogin: ProofableLogin) =>
    handleAppResponse(storeAuthVerifyRequest(httpService, proofableLogin), user => dispatch(login(user)))

  const handleLogoutRequest = () => dispatch(logout())

  return (
    <header className="bg-black py-3 px-2 md:px-8 w-full flex justify-between items-center">
      <a href="/" className="flex items-center">
        <img src="/images/logo-white.png" className="block mr-1 md:mr-2 w-12 h-12" />
        <span className="font-head text-white text-2xl uppercase tracking-widest">{Config.App.Name}</span>
      </a>
      <Navigation items={navItems} className="hidden md:block" />
      <div>
        {isLoggedIn ? (
          <DisconnectButton onClick={handleLogoutRequest} />
        ) : (
          <ConnectButton onTokenRequest={handleProofableTokenRequest} onLocalLogin={handleProofableLogin} />
        )}
      </div>
      <NavigationMobile items={navItems} />
    </header>
  )
}

export default Header
