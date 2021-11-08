import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'
import { handleAppResponse, IHttpService, ProofableLogin } from '@superciety/pwa-core-library'
import { Config } from '../config'
import { useAppDispatch, useAppSelector } from './store'
import { selectUser, selectUserLoggedIn } from './User/store/selectors'
import { login, logout } from './User/store/slice'
import { getMeRequest, storeAuthVerifyRequest } from './User/api'
import { getWalletService } from './wallet'

type AppGuardConfig = {
  redirectIfUnauthenticated?: boolean
}

export function useAppGuard(httpService: IHttpService, config?: AppGuardConfig) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const isLoggedInState = useAppSelector(selectUserLoggedIn)
  const user = useAppSelector(selectUser)
  const wallet = getWalletService()

  const { redirectIfUnauthenticated = true } = config || {}

  const redirectToAuthPage = () => Router.replace(Config.App.Pages.Auth)

  httpService.onUnauthorized = async () => {
    dispatch(logout())
    await wallet.logout()
    redirectToAuthPage()
  }

  useEffect(() => {
    const isLoggedInWallet = wallet.isLoggedIn()

    // on web wallet login, the wallet redirects back to the origin page
    // with address & signature that can be used to verify authenticity
    if (router.query.address && router.query.signature) {
      const proofableLogin: ProofableLogin = {
        address: router.query.address as string,
        signature: router.query.signature as string,
      }
      handleAppResponse(storeAuthVerifyRequest(httpService, proofableLogin), user => dispatch(login(user)))
    }

    // all good chef, user has access - so leave her alone, creep
    if (isLoggedInWallet && isLoggedInState) {
      return
    }

    // if local storage indicates a logged in user, check if the current session is valid
    // by sending a request to the api's user endpoint. if the request succeeds, the user
    // state will be populated. if the api returns 401, the current user will be logged out
    if (isLoggedInWallet && !isLoggedInState && !user) {
      handleAppResponse(getMeRequest(httpService), me => dispatch(login(me)))
      return
    }

    if (redirectIfUnauthenticated) {
      redirectToAuthPage()
    }
  }, [isLoggedInState, user])
}
