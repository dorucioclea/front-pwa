import type { NextPage } from 'next'
import SuperIdLayout from '../../layouts/SuperIdLayout'
import IdentityPresentor from '../../features/Identity/IdentityPresentor'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/User/store/selectors'
import { useAppGuard } from '../../features/hooks'
import { getHttpService } from '../../features/http'
import { useEffect, useState } from 'react'
import { getScyIdentityRequest, handleAppResponse, ScyIdentity } from '@superciety/pwa-core-library'

const IdentityPage: NextPage = () => {
  const user = useSelector(selectUser)
  const [identity, setIdentity] = useState<ScyIdentity | null>(null)

  useAppGuard(getHttpService())

  useEffect(() => {
    if (!user) return
    handleAppResponse(getScyIdentityRequest(getHttpService(), user.address), data => setIdentity(data))
  }, [user])

  return (
    <SuperIdLayout>
      {identity && <IdentityPresentor identity={identity} />}
    </SuperIdLayout>
  )
}

export default IdentityPage
