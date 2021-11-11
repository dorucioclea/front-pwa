import type { NextPage } from 'next'
import BaseLayout from '../../layouts/BaseLayout'
import IdentityPresentor from '../../features/Identity/IdentityPresentor'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/User/store/selectors'
import { useAppGuard } from '../../features/hooks'
import { getHttpService } from '../../features/http'
import { useEffect, useState } from 'react'
import { getScyIdentityRequest, handleAppResponse, SCY_Identity } from '@superciety/pwa-core-library'

const IdentityPage: NextPage = () => {
  const user = useSelector(selectUser)
  const [identity, setIdentity] = useState<SCY_Identity | null>(null)

  useAppGuard(getHttpService())

  useEffect(() => {
    if (!user) return
    handleAppResponse(getScyIdentityRequest(getHttpService(), user.address), data => setIdentity(data))
  }, [user])

  return (
    <BaseLayout>
      {identity && <IdentityPresentor identity={identity} />}
    </BaseLayout>
  )
}

export default IdentityPage
