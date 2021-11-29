import FocusLayout from '../layouts/FocusLayout'
import SuperBuyer from '../features/Distribution/SuperBuyer'
import { NextPage } from 'next'
import { useAppGuard } from '../features/hooks'
import { getHttpService } from '../features/http'

const GetSuperPage: NextPage = () => {
  const httpService = getHttpService()

  useAppGuard(httpService, { redirectIfUnauthenticated: false })

  return (
    <FocusLayout>
      <div className="flex justify-center items-center">
        <SuperBuyer httpService={httpService} />
      </div>
    </FocusLayout>
  )
}

export default GetSuperPage
