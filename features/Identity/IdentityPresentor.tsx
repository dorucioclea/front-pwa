import _Header from './_Header'
import _FreeiamRankOverview from './_FreeiamRankOverview'
import { Identity } from '@superciety/pwa-core-library'

type Props = {
  identity: Identity
}

const IdentityPresentor = ({ identity }: Props) => (
  <div>
    <_FreeiamRankOverview identity={identity} />
    <_Header identity={identity} />
  </div>
)

export default IdentityPresentor
