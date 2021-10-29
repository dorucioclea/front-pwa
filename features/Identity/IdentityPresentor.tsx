import _Header from './_Header'
import { Identity } from './types'

type Props = {
  identity: Identity
}

const IdentityPresentor = ({ identity }: Props) => {
  return (
    <div>
      <_Header identity={identity} />
    </div>
  )
}

export default IdentityPresentor
