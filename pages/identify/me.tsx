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
  const [isLoading, setIsLoading] = useState(false)

  useAppGuard(getHttpService())

  useEffect(() => {
    if (!user) return
    setIsLoading(true)
    handleAppResponse(getIdentityRequest(getHttpService(), user.address), data => {
      setIdentity(data)
      setIsLoading(false)
    }, () => setIsLoading(false), 250)
  }, [user])

  return (
    <IdentityLayout loading={isLoading}>
      {identity && <IdentityPresentor identity={identity} />}
    </IdentityLayout>
  )
}

export default IdentityPage
