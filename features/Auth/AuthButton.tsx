import { useAppDispatch } from '../store'
import { useRouter } from 'next/router'
import { AppSystemColor, ConnectButton, handleAppResponse, ProofableLogin } from '@superciety/pwa-core-library'
import { Config } from '../../config'
import { getHttpService } from '../http'
import { getAuthProofableTokenRequest, storeAuthVerifyRequest } from '../User/api'
import { login } from '../User/store/slice'

type Props = {
  color?: AppSystemColor
  large?: boolean
  children?: any
}

const AuthButton = (props: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const httpService = getHttpService()
  const isRequestedExternalInitialConnect = router.query.action === 'initial-connect'

  const handleProofableTokenRequest = async () => (await getAuthProofableTokenRequest(httpService)).data.token

  const handleProofableLogin = (proofableLogin: ProofableLogin | null) => {
    if (!proofableLogin) return
    handleAppResponse(storeAuthVerifyRequest(httpService, proofableLogin), user => dispatch(login(user)))
  }

  return (
    <ConnectButton
      walletConfig={Config.Blockchain.WalletConfig}
      onTokenRequest={handleProofableTokenRequest}
      onLocalLogin={handleProofableLogin}
      color={props.color}
      forceOpen={isRequestedExternalInitialConnect}
      large={props.large}
    >
      {props.children}
    </ConnectButton>
  )
}

export default AuthButton
