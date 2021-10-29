import _ProfileImage from './_ProfileImage'
import { Identity } from './types'

type Props = {
  identity: Identity
}

const _Header = ({ identity }: Props) => (
  <div>
    <span className="block text-lg text-gray-700 mb-2">{identity.address}</span>
    <header className="flex p-8 rounded-xl bg-gray-50">
      <_ProfileImage identity={identity} className="px-4" />
      <div className="flex-grow">dfadsa</div>
    </header>
  </div>
)

export default _Header
