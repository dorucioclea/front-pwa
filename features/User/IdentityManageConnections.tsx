import IdentityManageFreeiamConnect from './IdentityManageFreeiamConnect'
import _IdentityManageConnectButton from './_IdentityManageConnectButton'
import { IHttpService } from '@superciety/pwa-core-library'
import { useAppSelector } from '../store'
import { selectUser } from './store/selectors'
import { Config } from '../../config'
import { hasConnectedProvider } from './helpers'

type Props = {
  httpService: IHttpService
}

const IdentityManageConnections = ({ httpService }: Props) => {
  const user = useAppSelector(selectUser)

  return user ? (
    <section>
      <h2 className="text-gray-600 text-2xl mb-4">Connections</h2>
      <div className="space-x-8">
        <IdentityManageFreeiamConnect httpService={httpService} />
        {Config.ConnectionProviders.map(provider => (
          <_IdentityManageConnectButton
            key={provider.id}
            href={provider.href}
            icon={provider.icon}
            colorCode={provider.colorCode}
            connected={hasConnectedProvider(user, provider.id)}
          >
            {provider.label}
          </_IdentityManageConnectButton>
        ))}
      </div>
    </section>
  ) : null
}

export default IdentityManageConnections
