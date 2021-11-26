import IdentityManageFreeiamConnect from './IdentityFreeiamConnect'
import _ConnectButton from './_ConnectButton'
import { useState } from 'react'
import { Button, IHttpService, StickyModal, Input } from '@superciety/pwa-core-library'
import { useAppSelector } from '../../store'
import { selectUser } from '../../User/store/selectors'
import { Config } from '../../../config'
import { hasConnectedProvider } from '../../User/helpers'
import { SocialAccountPlatform } from '../../User/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faAt } from '@fortawesome/free-solid-svg-icons'

type Props = {
  httpService: IHttpService
}

const IdentityConnectionManager = ({ httpService }: Props) => {
  const user = useAppSelector(selectUser)

  return user ? (
    <section>
      <h2 className="text-gray-600 text-2xl mb-4">Connections</h2>
      <div className="flex space-x-4">
        <IdentityManageFreeiamConnect httpService={httpService} />
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
    </section>
  ) : null
}

export default IdentityConnectionManager
