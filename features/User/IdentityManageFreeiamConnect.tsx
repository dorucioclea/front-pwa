import QrCode from 'qrcode'
import _IdentityManageConnectButton from './_IdentityManageConnectButton'
import { useEffect, useState } from 'react'
import { StickyModal, IHttpService, handleAppResponse } from '@superciety/pwa-core-library'
import { Config } from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { getFreeiamConnectUriRequest, getUserRequest, storeFreeiamDisconnectRequest } from './api'
import { setAuthenticatedUser } from './store/slice'
import { useAppDispatch, useAppSelector } from '../store'
import { selectUser } from './store/selectors'
import { hasConnectedProvider } from './helpers'

const CountdownStartFrom = 60

type Props = {
  httpService: IHttpService
}

const IdentityManageFreeiamConnect = ({ httpService }: Props) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  const [isOpen, setIsOpen] = useState(false)
  const [qrCodeSvg, setQrCodeSvg] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(0)
  const hasConnectedAccount = hasConnectedProvider(user, 'freeiam')

  const handleClick = () => {
    if (!hasConnectedAccount) {
      setIsOpen(true)
      return
    }

    handleAppResponse(storeFreeiamDisconnectRequest(httpService), updatedUser => dispatch(setAuthenticatedUser(updatedUser)))
  }

  const handleShowCodeRequest = () =>
    handleAppResponse(getFreeiamConnectUriRequest(httpService), ({ uri }) => {
      setCountdown(CountdownStartFrom)
      buildQrCode(uri)
    })

  const reset = () => {
    setIsOpen(false)
    setCountdown(0)
  }

  const buildQrCode = async (connectUri: string) => setQrCodeSvg(await QrCode.toString(connectUri, { type: 'svg' }))

  useEffect(() => {
    const countdownItvl = setInterval(() => {
      setCountdown(current => (current > 1 ? current - 1 : 0))
    }, 1000)

    return () => clearInterval(countdownItvl)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      setIsOpen(false)
      setQrCodeSvg(null)
    }
  }, [countdown])

  useEffect(() => {
    if (!isOpen) return
    if (countdown === CountdownStartFrom) return
    if (countdown !== 0 && countdown % 5 !== 0) return
    handleAppResponse(getUserRequest(httpService), user => {
      dispatch(setAuthenticatedUser(user))
      if (hasConnectedProvider(user, 'freeiam')) reset()
    })
  }, [isOpen, countdown])

  return (
    <>
      <_IdentityManageConnectButton
        onClick={handleClick}
        colorCode={Config.App.Colors.FreeiamPrimary}
        connected={hasConnectedAccount}
      >
        Freeiam
        <img src="/images/freeiam-logo.png" className="inline-block h-5 mx-2 -mt-1" />
      </_IdentityManageConnectButton>
      <StickyModal open={isOpen} onClose={reset}>
        <p className="text-gray-800 text-xl text-center mt-4 mb-12">
          Open the Freeiam <img src="/images/freeiam-logo.png" className="inline-block h-5 mx-2 -mt-1" /> App, press{' '}
          <FontAwesomeIcon icon={faBars} className="inline-block mx-2" /> and select <strong>"Scan QR Code"</strong>
        </p>
        <div className="flex justify-center mb-8">
          {qrCodeSvg ? (
            <div>
              <figure dangerouslySetInnerHTML={{ __html: qrCodeSvg }} className="h-48 w-48" />
              <span className="block text-2xl font-head text-blue-600 text-center">Closes in {countdown}s</span>
            </div>
          ) : (
            <button
              onClick={handleShowCodeRequest}
              className="block h-48 w-48 text-xl text-gray-600 border-2 border-solid border-gray-200 rounded-xl"
            >
              <FontAwesomeIcon icon={faQrcode} size="2x" className="text-gray-800 opacity-50" />
              <span className="block mt-2">Show QR Code</span>
            </button>
          )}
        </div>
      </StickyModal>
    </>
  )
}

export default IdentityManageFreeiamConnect
