import Link from 'next/link'
import ManageHeaderButton from '../Manage/ManageHeaderButton'
import { Config } from '../../config'
import { getHttpService } from '../http'
import { getAuthProofableTokenRequest, storeAuthVerifyRequest } from '../User/api'
import { useAppDispatch, useAppSelector } from '../store'
import { login } from '../User/store/slice'
import { selectUserLoggedIn } from '../User/store/selectors'
import { getWalletService } from '../wallet'
import { logoutUser } from '../User/helpers'
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

  const handleProofableTokenRequest = async () => (await getAuthProofableTokenRequest(httpService)).data.token

  const handleProofableLogin = (proofableLogin: ProofableLogin | null) => {
    if (!proofableLogin) return
    handleAppResponse(storeAuthVerifyRequest(httpService, proofableLogin), user => dispatch(login(user)))
  }

  const handleLogoutRequest = () => logoutUser(async () => await getWalletService().logout())

  return (
    <header className="bg-black py-3 px-2 md:px-8 w-full flex justify-between items-center">
      <Link href="/">
        <a className="flex items-center">
          <img src="/images/logo-white.png" className="block mr-1 md:mr-2 w-12 h-12" />
          <span className="font-head text-white text-2xl uppercase tracking-widest">{Config.App.Name}</span>
        </a>
      </Link>
      <Navigation items={navItems} className="hidden md:block" />
      <div className="flex justify-end sm:w-20 md:w-32 lg:w-56 xl:w-64">
        {isLoggedIn ? (
          <div className="flex items-center space-x-6">
            <ManageHeaderButton />
            <DisconnectButton onClick={handleLogoutRequest} />
          </div>
        ) : (
          <ConnectButton
            walletConfig={Config.Blockchain.WalletConfig}
            onTokenRequest={handleProofableTokenRequest}
            onLocalLogin={handleProofableLogin}
          />
        )}
      </div>
      <NavigationMobile items={navItems} />
    </header>
  )
}

export default Header
