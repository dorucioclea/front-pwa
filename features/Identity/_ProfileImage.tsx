import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Identity } from '@superciety/pwa-core-library'

type Props = {
  identity: Identity
  className?: string
}

const _ProfileImage = ({ identity, className = '' }: Props) =>
  identity.profileImageUrl ? (
    <div className={`block relative ${className}`}>
      <img className="h-32 w-32 rounded-full" src={identity.profileImageUrl} alt="" />
      <span className="absolute bottom-0 right-0 flex justify-center items-center h-8 w-8 rounded-full ring-2 ring-white bg-blue-400">
        <FontAwesomeIcon icon={faCheck} className="text-blue-100" size="lg" />
      </span>
    </div>
  ) : null

export default _ProfileImage
