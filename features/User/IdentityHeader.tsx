import _IdentityImage from './_IdentityImage'

type Props = {}

const IdentityHeader = ({}: Props) => {
  return (
    <header className="flex p-8 rounded-xl bg-gray-50">
      <div className="px-4">
        <_IdentityImage />
        <span className="block text-blue-400 text-center font-bold">Verified</span>
      </div>
      <div className="flex-grow">dfadsa</div>
    </header>
  )
}

export default IdentityHeader
