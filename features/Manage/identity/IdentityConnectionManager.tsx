import IdentityManageFreeiamConnect from './IdentityFreeiamConnect'
import _ConnectButton from './_ConnectButton'
import { IHttpService } from '@superciety/pwa-core-library'
import { useAppSelector } from '../../store'
import { selectUser } from '../../User/store/selectors'
import { Config } from '../../../config'
import { hasConnectedProvider } from '../../User/helpers'

type Props = {
  httpService: IHttpService
}

const IdentityConnectionManager = ({ httpService }: Props) => {
  const user = useAppSelector(selectUser)

  return user ? (
    <section>
      <h2 className="text-gray-600 text-2xl mb-4">Connections</h2>
      <div>
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
