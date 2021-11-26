import type { NextPage } from 'next'
import IdentityLayout from '../../layouts/IdentityLayout'
import IdentityPresentor from '../../features/Identity/IdentityPresentor'
import { useAppGuard } from '../../features/hooks'
import { getHttpService } from '../../features/http'
import { useEffect, useState } from 'react'
import { getIdentityRequest, handleAppResponse, Identity } from '@superciety/pwa-core-library'
import { useRouter } from 'next/router'

const IdentityPage: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string
  const [identity, setIdentity] = useState<Identity | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useAppGuard(getHttpService(), { redirectIfUnauthenticated: false })

  useEffect(() => {
    if (!id) return
    setIsLoading(true)
    handleAppResponse(getIdentityRequest(getHttpService(), id), data => {
      setIdentity(data)
      setIsLoading(false)
    }, () => setIsLoading(false), 250)
  }, [id])

  return (
    <IdentityLayout loading={isLoading}>
      {identity && <IdentityPresentor identity={identity} />}
    </IdentityLayout>
  )
}

export default IdentityPage
