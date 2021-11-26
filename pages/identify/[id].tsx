import type { NextPage } from 'next'
import IdentityLayout from '../../layouts/IdentityLayout'
import IdentityPresentor from '../../features/Identity/IdentityPresentor'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/User/store/selectors'
import { useAppGuard } from '../../features/hooks'
import { getHttpService } from '../../features/http'
import { useEffect, useState } from 'react'
import { getIdentityRequest, handleAppResponse, Identity } from '@superciety/pwa-core-library'
import { useRouter } from 'next/router'

const IdentityPage: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  const [identity, setIdentity] = useState<Identity | null>(null)

  useAppGuard(getHttpService())

  useEffect(() => {
    if (!id) return
    handleAppResponse(getIdentityRequest(getHttpService(), id), data => setIdentity(data))
  }, [id])

  return (
    <IdentityLayout>
      {identity && <IdentityPresentor identity={identity} />}
    </IdentityLayout>
  )
}

export default IdentityPage
