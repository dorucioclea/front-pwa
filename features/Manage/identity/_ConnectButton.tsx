import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  children: any
  href: string
  onClick?: () => void
  colorCode: string
  icon?: IconDefinition
  connected: boolean
}

const _ConnectButton = (props: Props) => {
  const overlayClassNames =
    'opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center bg-gray-200 rounded-xl transition duration-300 text-gray-600'

  const Overlay = () => <span className={overlayClassNames}>{props.connected ? 'Disconnect' : 'Connect'}</span>

  const Icon = ({ icon }: { icon: IconDefinition }) => (
    <FontAwesomeIcon icon={icon} size="lg" className="text-white opacity-75 inline-block mr-3" />
  )

  const ConnectedIcon = () => <FontAwesomeIcon icon={faCheck} size="lg" className="text-green-500" />

  return (
    <a
      href={props.href}
      onClick={props.onClick}
      className={`relative flex justify-between w-full max-w-lg mb-4 px-8 py-4 bg-gray-50 text-white text-xl rounded-3xl active:shadow group ${
        props.connected ? 'opacity-50' : ''
      }`}
      style={{ backgroundColor: props.colorCode }}
    >
      <span>
        {props.icon && !props.connected && <Icon icon={props.icon} />}
        {props.children}
      </span>
      <Overlay />
      {props.connected && <ConnectedIcon />}
    </a>
  )
}

export default _ConnectButton
