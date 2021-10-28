import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  children: any
  href?: string
  onClick?: () => void
  colorCode: string
  icon?: IconDefinition
  connected: boolean
}

const _IdentityManageConnectButton = (props: Props) => {
  const btnClassNames = `relative flex justify-between w-full max-w-lg mb-4 px-8 py-4 bg-gray-50 text-gray-700 text-xl rounded-xl active:shadow border-l-4 border-solid group ${
    props.connected ? 'opacity-50' : ''
  }`

  const overlayClassNames =
    'opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center bg-gray-100 rounded-xl transition duration-300'

  const Overlay = () => <span className={overlayClassNames}>{props.connected ? 'Disconnect' : 'Connect'}</span>

  const Icon = ({ icon }: { icon: IconDefinition }) => (
    <FontAwesomeIcon icon={icon} color={props.colorCode} size="lg" className="opacity-75 inline-block mr-3" />
  )

  const ConnectedIcon = () => <FontAwesomeIcon icon={faCheck} size="lg" className="text-green-500" />

  return props.href ? (
    <a href={props.href} className={btnClassNames} style={{ borderColor: props.colorCode }}>
      <span>
        {props.icon && !props.connected && <Icon icon={props.icon} />}
        {props.children}
      </span>
      {props.connected && <ConnectedIcon />}
      <Overlay />
    </a>
  ) : (
    <button onClick={props.onClick} className={btnClassNames} style={{ borderColor: props.colorCode }}>
      <span>
        {props.icon && !props.connected && <Icon icon={props.icon} />}
        {props.children}
      </span>
      <Overlay />
      {props.connected && <ConnectedIcon />}
    </button>
  )
}

export default _IdentityManageConnectButton
