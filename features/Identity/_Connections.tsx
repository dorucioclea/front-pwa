import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Identity, SocialAccountPlatform } from '@superciety/pwa-core-library'
import { Config } from '../../config'

type Props = {
  identity: Identity
}

const _Connections = ({ identity }: Props) => (
  <div>
    <h2 className="text-2xl mb-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-blue-800">
      Verified Connections
    </h2>
    <ul aria-label="Connections">
      {Object.entries(identity.connections).map(([platform, socialAccount]) => (
        <li key={platform} className="text-gray-800 px-3 py-2 text-lg flex items-center">
          {getPlatformIcon(platform as SocialAccountPlatform)}
          <a href="#" target="_blank" className="inline-block ml-2">
            {'@' + socialAccount.username}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const getPlatformIcon = (platform: SocialAccountPlatform) => {
  if (platform === 'freeiam') {
    return <img src="/images/freeiam-logo.png" className="inline-block h-4" style={{ marginLeft: '-2px' }} />
  }

  const connectionProvider = Config.ConnectionProviders.find(p => p.id === platform)

  if (connectionProvider) {
    return <FontAwesomeIcon icon={connectionProvider.icon} color={connectionProvider.colorCode} size="lg" />
  }

  return null
}

export default _Connections
