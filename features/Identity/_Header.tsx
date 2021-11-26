import _ProfileImage from './_ProfileImage'
import _Username from './_Username'
import _Address from './_Address'
import { Identity } from '@superciety/pwa-core-library'

type Props = {
  identity: Identity
}

const _Header = ({ identity }: Props) => (
  <header className="flex p-8 border-gray-200 border-solid rounded-3xl" style={{ borderTopWidth: '4px' }}>
    <_ProfileImage identity={identity} className="px-4" />
    <div className="flex-grow">
      <_Username identity={identity} />
      <_Address identity={identity} />
    </div>
  </header>
)

export default _Header
