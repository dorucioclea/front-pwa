import { User } from './types'

type Props = {
  user: User
}

const _IdentityConnections = ({ user }: Props) => {
  const getPlatformIcon = (platform: string) => {
    return null
  }
  return (
    <ul className="space-y-1" aria-label="Connections">
      {user.connections.map(connection => (
        <li
          key={connection.platform}
          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
        >
          {getPlatformIcon(connection.platform)}
          <span>{'@' + connection.username}</span>
        </li>
      ))}
    </ul>
  )
}

export default _IdentityConnections
