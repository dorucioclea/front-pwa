import IdentityManageFreeiamConnect from './IdentityFreeiamConnect'
import _ConnectButton from './_ConnectButton'
import { useState } from 'react'
import { Button, IHttpService, StickyModal, Input } from '@superciety/pwa-core-library'
import { useAppSelector } from '../../store'
import { selectUser } from '../../User/store/selectors'
import { Config } from '../../../config'
import { hasConnectedProvider } from '../../User/helpers'
import { UserConnectionPlatform } from '../../User/types'
import { callIdentifyGithubSC, callIdentifyTwitterSC } from '../../Identity/blockchain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faAt } from '@fortawesome/free-solid-svg-icons'

type Props = {
  httpService: IHttpService
}

const IdentityConnectionManager = ({ httpService }: Props) => {
  const user = useAppSelector(selectUser)
  const [selectedPlatform, setSelectedPlatform] = useState<UserConnectionPlatform | null>(null)
  const [selectedUsername, setSelectedUsername] = useState('')

  const resetState = () => {
    setSelectedPlatform(null)
    setSelectedUsername('')
  }

  const handleCallSmartContract = () => {
    if (!user || !selectedPlatform || !selectedUsername) return
    if (selectedPlatform === 'twitter') callIdentifyTwitterSC(selectedUsername, resetState)
    if (selectedPlatform === 'github') callIdentifyGithubSC(selectedUsername, resetState)
  }

  return user ? (
    <section>
      <h2 className="text-gray-600 text-2xl mb-4">Connections</h2>
      <div>
        <IdentityManageFreeiamConnect httpService={httpService} />
        {Config.ConnectionProviders.map(provider => (
          <_ConnectButton
            key={provider.id}
            onClick={() => setSelectedPlatform(provider.id)}
            icon={provider.icon}
            colorCode={provider.colorCode}
            connected={hasConnectedProvider(user, provider.id)}
          >
            {provider.label}
          </_ConnectButton>
        ))}
      </div>
      <StickyModal open={!!selectedPlatform} onClose={() => setSelectedPlatform(null)}>
        <h2 className="text-center mb-2">One last step</h2>
        <p className="text-center mb-8">Verify your identity by sending your username to the Superciety Smart Contract</p>
        <Input icon={faAt} value={selectedUsername} onChange={val => setSelectedUsername(val)} className="mb-4" />
        <Button onClick={handleCallSmartContract} color="blue" className="block w-full tracking-widest">
          Verify
        </Button>
      </StickyModal>
    </section>
  ) : null
}

export default IdentityConnectionManager
