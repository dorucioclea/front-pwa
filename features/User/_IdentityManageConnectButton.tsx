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
  const btnClassNames =
    'relative inline-block px-6 py-4 text-gray-700 text-xl bg-gray-50 rounded-xl active:shadow border-l-4 border-solid group'

  const overlayClassNames =
    'opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center bg-gray-100 rounded-xl transition duration-300'

  const Overlay = () => <span className={overlayClassNames}>{props.connected ? 'Disconnect' : 'Connect'}</span>

  const Icon = ({ icon }: { icon: IconDefinition }) => (
    <FontAwesomeIcon icon={icon} color={props.colorCode} size="lg" className="opacity-75 inline-block ml-3" />
  )

  const ConnectedIcon = () => (
    <FontAwesomeIcon icon={faCheck} size="2x" className="text-green-500 absolute bottom-0 left-2/3 -mb-3 opacity-75" />
  )

  return props.href ? (
    <a href={props.href} className={btnClassNames} style={{ borderColor: props.colorCode }}>
      {props.children}
      {props.icon && <Icon icon={props.icon} />}
      <Overlay />
      {props.connected && <ConnectedIcon />}
    </a>
  ) : (
    <button onClick={props.onClick} className={btnClassNames} style={{ borderColor: props.colorCode }}>
      {props.children}
      {props.icon && <Icon icon={props.icon} />}
      <Overlay />
      {props.connected && <ConnectedIcon />}
    </button>
  )
}

export default _IdentityManageConnectButton
