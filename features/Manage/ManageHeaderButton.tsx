import Link from 'next/link'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Config } from '../../config'

const ManageHeaderButton = () => (
  <Link href={Config.App.Pages.Manage}>
    <a className="flex justify-center items-center h-8 w-8 rounded-full hover:shadow-2xl group bg-gray-600 hover:bg-primary-400">
      <FontAwesomeIcon icon={faUser} size="1x" className="text-gray-800 group-hover:text-white" />
    </a>
  </Link>
)

export default ManageHeaderButton
