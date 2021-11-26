import _Header from './_Header'
import _FreeiamRankOverview from './_FreeiamRankOverview'
import _Connections from './_Connections'
import { Identity } from '@superciety/pwa-core-library'

type Props = {
  identity: Identity
}

const IdentityPresentor = ({ identity }: Props) => (
  <div className="flex w-full">
    <div className="w-2/3 p-4">
      <_FreeiamRankOverview identity={identity} />
      <_Header identity={identity} />
    </div>
    <div className="w-1/3 p-4">
      <section className="bg-gray-50 rounded-3xl p-8 mb-8">
        <_Connections identity={identity} />
      </section>
    </div>
  </div>
)

export default IdentityPresentor
