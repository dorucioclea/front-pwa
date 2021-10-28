import _IdentityImage from './_IdentityImage'
import { User, UserPrivate } from './types'

type Props = {
  user: User | UserPrivate
}

const IdentityHeader = ({ user }: Props) => (
  <header className="flex p-8 rounded-xl bg-gray-50">
    <_IdentityImage user={user} className="px-4" />
    <div className="flex-grow">dfadsa</div>
  </header>
)

export default IdentityHeader
