import ManageLayout from '../../layouts/ManageLayout'
import IdentityConnectionManager from '../../features/Manage/identity/IdentityConnectionManager'
import { NextPage } from 'next'
import { getHttpService } from '../../features/http'
import { useAppGuard } from '../../features/hooks'

const ManageIdentityPage: NextPage = () => {
  const httpService = getHttpService()

  useAppGuard(httpService)

  return (
    <ManageLayout heading="Identity">
      <p className="text-xl mb-8">Manage your public image within Superciety</p>
      <IdentityConnectionManager httpService={httpService} />
    </ManageLayout>
  )
}

export default ManageIdentityPage
