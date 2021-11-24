import _Header from './_Header'
import _FreeiamRankOverview from './_FreeiamRankOverview'
import { ScyIdentity } from '@superciety/pwa-core-library'

type Props = {
  identity: ScyIdentity
}

const IdentityPresentor = ({ identity }: Props) => (
  <div className="flex w-full">
    <div className="w-2/3 p-4">
      <_FreeiamRankOverview identity={identity} />
      <_Header identity={identity} />
    </div>
    <div className="w-1/3 p-4">
      <div className="bg-gray-800 rounded-3xl p-4"></div>
    </div>
  </div>
)

export default IdentityPresentor
