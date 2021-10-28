import ManageLayout from '../../layouts/ManageLayout'
import IdentityManageConnections from '../../features/User/IdentityManageConnections'
import { NextPage } from 'next'
import { getHttpService } from '../../features/http'
import { useAppGuard } from '../../features/hooks'

const ManageIdentityPage: NextPage = () => {
  const httpService = getHttpService()

  useAppGuard(httpService)

  return (
    <ManageLayout heading="Identity">
      <p className="text-xl mb-8">Manage your public image within Superciety</p>
      <IdentityManageConnections httpService={httpService} />
    </ManageLayout>
  )
}

export default ManageIdentityPage
