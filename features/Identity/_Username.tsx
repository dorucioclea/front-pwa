import { Identity } from '@superciety/pwa-core-library'
import { getRawUsername } from '../User/helpers'

type Props = {
  identity: Identity
}

const _Username = ({ identity }: Props) =>
  identity.username ? (
    <h1 className="mb-2">
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
        @{getRawUsername(identity?.username || '')}
      </span>
      <span className="text-2xl text-gray-300">.elrond</span>
    </h1>
  ) : null

export default _Username
