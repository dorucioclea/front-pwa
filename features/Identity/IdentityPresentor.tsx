import _Header from './_Header'
import _FreeiamRankOverview from './_FreeiamRankOverview'
import { SCY_Identity } from '@superciety/pwa-core-library'

type Props = {
  identity: SCY_Identity
}

const IdentityPresentor = ({ identity }: Props) => (
  <div>
    <_FreeiamRankOverview identity={identity} />
    <_Header identity={identity} />
  </div>
)

export default IdentityPresentor
