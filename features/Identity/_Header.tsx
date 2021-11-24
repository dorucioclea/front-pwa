import _ProfileImage from './_ProfileImage'
import { ScyIdentity } from '@superciety/pwa-core-library'

type Props = {
  identity: ScyIdentity
}

const _Header = ({ identity }: Props) => (
  <header className="flex p-8 border-gray-200 border-solid rounded-3xl" style={{ borderTopWidth: '4px' }}>
    <_ProfileImage identity={identity} className="px-4" />
    <div className="flex-grow">dfadsa</div>
  </header>
)

export default _Header
