import { Identity } from '@superciety/pwa-core-library'
import { Config } from '../../config'

type Props = {
  identity: Identity
}

const _Address = ({ identity }: Props) => (
  <a
    href={`${Config.Urls.ElrondExplorer}/accounts/${identity.address}`}
    target="_blank"
    className="block text-gray-400 mb-4"
  >
    {identity.address}
  </a>
)

export default _Address
