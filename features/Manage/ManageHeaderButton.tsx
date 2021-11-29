import Link from 'next/link'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Config } from '../../config'
import { classNames } from '@superciety/pwa-core-library'

type Props = {
  dark?: boolean
}

const ManageHeaderButton = (props: Props) => (
  <Link href={Config.App.Pages.Manage}>
    <a
      className={classNames(
        'flex justify-center items-center h-8 w-8 rounded-full hover:shadow-2xl group',
        props.dark ? 'bg-gray-600 hover:bg-primary-400' : 'bg-gray-100 hover:bg-primary-400'
      )}
    >
      <FontAwesomeIcon icon={faUser} size="1x" className="text-gray-800 group-hover:text-white" />
    </a>
  </Link>
)

export default ManageHeaderButton
