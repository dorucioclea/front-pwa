import type { NextPage } from 'next'
import BaseLayout from '../../layouts/BaseLayout'
import IdentityPresentor from '../../features/Identity/IdentityPresentor'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/User/store/selectors'
import { useAppGuard } from '../../features/hooks'
import { getHttpService } from '../../features/http'
import { useEffect, useState } from 'react'
import { Identity } from '../../features/Identity/types'
import { handleAppResponse } from '@superciety/pwa-core-library'
import { getIdentityRequest } from '../../features/Identity/api'

const IdentityPage: NextPage = () => {
  const httpService = getHttpService()
  const user = useSelector(selectUser)
  const [identity, setIdentity] = useState<Identity | null>(null)

  useAppGuard(httpService)

  useEffect(() => {
    if (!user) return
    handleAppResponse(getIdentityRequest(httpService, user.address), data => setIdentity(data))
  }, [user])

  return (
    <BaseLayout>
      {identity && <IdentityPresentor identity={identity} />}
    </BaseLayout>
  )
}

export default IdentityPage
