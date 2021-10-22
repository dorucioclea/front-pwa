import { Config } from '../../config'
import { getHttpService } from '../http'
import { ConnectButton, handleAppResponse } from '@superciety/pwa-core-library'
import { getAuthProofableToken, storeAuthVerifyRequest } from '../User/api'
import { ProofableLogin } from '@superciety/pwa-core-library/lib/services/auth'

type Props = {}

const Navigation = ({}: Props) => {
  const httpService = getHttpService()

  const handleProofableTokenRequest = async () => (await getAuthProofableToken(httpService)).data.token

  const handleProofableLogin = (proofableLogin: ProofableLogin) =>
    handleAppResponse(storeAuthVerifyRequest(httpService, proofableLogin), d => console.log('yay', d))

  return (
    <header className="bg-black py-2 px-8 w-full flex justify-between items-center">
      <a href="/" className="flex items-center">
        <img src="/images/logo-white.png" className="block mr-2 w-12 h-12" />
        <span className="font-head text-white text-2xl uppercase tracking-widest">{Config.App.Name}</span>
      </a>
      <div>
        <ConnectButton onTokenRequest={handleProofableTokenRequest} onLocalLogin={handleProofableLogin} />
      </div>
    </header>
  )
}

export default Navigation
