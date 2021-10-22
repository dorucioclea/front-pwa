import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  className?: string
}

const _IdentityImage = ({ className = '' }: Props) => (
  <div className={`block relative ${className}`}>
    <img
      className="h-32 w-32 rounded-full"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt=""
    />
    <span className="absolute bottom-0 right-0 flex justify-center items-center h-8 w-8 rounded-full ring-2 ring-white bg-blue-400">
      <FontAwesomeIcon icon={faCheck} className="text-blue-100" size="lg" />
    </span>
  </div>
)

export default _IdentityImage
