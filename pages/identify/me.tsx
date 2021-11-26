import type { NextPage } from 'next'
import IdentityLayout from '../../layouts/IdentityLayout'
import IdentityPresentor from '../../features/Identity/IdentityPresentor'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/User/store/selectors'
import { useAppGuard } from '../../features/hooks'
import { getHttpService } from '../../features/http'
import { useEffect, useState } from 'react'
import { getIdentityRequest, handleAppResponse, Identity } from '@superciety/pwa-core-library'

const IdentityPage: NextPage = () => {
  const user = useSelector(selectUser)
  const [identity, setIdentity] = useState<Identity | null>(null)

  useAppGuard(getHttpService())

  useEffect(() => {
    if (!user) return
    handleAppResponse(getIdentityRequest(getHttpService(), user.address), data => setIdentity(data))
  }, [user])

  return (
    <IdentityLayout>
      {identity && <IdentityPresentor identity={identity} />}
    </IdentityLayout>
  )
}

export default IdentityPage
