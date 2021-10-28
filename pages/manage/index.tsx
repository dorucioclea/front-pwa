import ManageLayout from '../../layouts/ManageLayout'
import { NextPage } from 'next'
import { getHttpService } from '../../features/http'
import { useAppGuard } from '../../features/hooks'
import IdentityManageFreeiamConnect from '../../features/User/IdentityManageFreeiamConnect'
import { Config } from '../../config'

const ManagePage: NextPage = () => {
  const httpService = getHttpService()

  useAppGuard(httpService)

  return (
    <ManageLayout heading="Manage">
      <p className="text-xl mb-4">Your settings on Superciety</p>
      <div className="p-6 py-4 rounded-xl mb-8 flex bg-gray-800">
        <IdentityManageFreeiamConnect httpService={httpService} />
      </div>
    </ManageLayout>
  )
}

export default ManagePage
