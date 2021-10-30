import IdentityManageFreeiamConnect from './IdentityFreeiamConnect'
import _ConnectButton from './_ConnectButton'
import { useState } from 'react'
import { Button, IHttpService, StickyModal } from '@superciety/pwa-core-library'
import { useAppSelector } from '../../store'
import { selectUser } from '../../User/store/selectors'
import { Config } from '../../../config'
import { hasConnectedProvider } from '../../User/helpers'
import { UserConnectionPlatform } from '../../User/types'
import { callIdentifyFreeiamSC } from '../../Identity/blockchain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
  httpService: IHttpService
}

const IdentityConnectionManager = ({ httpService }: Props) => {
  const user = useAppSelector(selectUser)
  const [justVerifiedProvider, setJustVerifiedProvider] = useState<UserConnectionPlatform | null>(null)

  const handleCallSmartContract = () => {
    if (!user) return
    if (justVerifiedProvider === 'freeiam' && user.connections.freeiam.username) {
      callIdentifyFreeiamSC(user.connections.freeiam.username, () => setJustVerifiedProvider(null))
    }
  }

  return user ? (
    <section>
      <h2 className="text-gray-600 text-2xl mb-4">Connections</h2>
      <div>
        <IdentityManageFreeiamConnect httpService={httpService} onConnected={() => setJustVerifiedProvider('freeiam')} />
        {Config.ConnectionProviders.map(provider => (
          <_ConnectButton
            key={provider.id}
            href={provider.connectUrl}
            icon={provider.icon}
            colorCode={provider.colorCode}
            connected={hasConnectedProvider(user, provider.id)}
          >
            {provider.label}
          </_ConnectButton>
        ))}
      </div>
      <StickyModal open={!!justVerifiedProvider} onClose={() => setJustVerifiedProvider(null)}>
        <h2 className="text-center mb-2">One last step</h2>
        <p className="text-center mb-8">Verify your identity by sending your username to the Superciety Smart Contract</p>
        <div className="flex justify-center my-4">
          <FontAwesomeIcon icon={faArrowDown} size="2x" className="text-blue-200" />
        </div>
        <Button onClick={handleCallSmartContract} color="blue" className="block w-full tracking-widest">
          Verify
        </Button>
        <div className="flex justify-center my-4">
          <FontAwesomeIcon icon={faArrowUp} size="2x" className="text-blue-200" />
        </div>
      </StickyModal>
    </section>
  ) : null
}

export default IdentityConnectionManager
