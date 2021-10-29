import ManageLayout from '../../layouts/ManageLayout'
import { NextPage } from 'next'
import { getHttpService } from '../../features/http'
import { useAppGuard } from '../../features/hooks'

const ManagePage: NextPage = () => {
  const httpService = getHttpService()

  useAppGuard(httpService)

  return (
    <ManageLayout heading="Manage">
      <p className="text-xl mb-4">Your settings on Superciety</p>
    </ManageLayout>
  )
}

export default ManagePage
