import type { NextPage } from 'next'
import WideLayout from '../../layouts/WideLayout'
import IdentityHeader from '../../features/User/IdentityHeader'

const Identity: NextPage = () => {
//   useEffect(() => {
//     const walletProvider = new ExtensionProvider()
//     walletProvider.init().then(async () => {
//       await walletProvider.login()
//     })
//   }, [])

  return (
    <WideLayout>
      <IdentityHeader />
    </WideLayout>
  )
}

export default Identity
