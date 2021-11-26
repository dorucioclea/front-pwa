import Link from 'next/link'
import Footer from '../features/Layout/Footer'
import { Config } from '../config'

type Props = {
  children: any
}

const IdentityLayout = ({ children }: Props) => (
  <div className="relative overflow-hidden pb-24 mb:pb-0">
    <header className="py-3 px-2 md:px-8 w-full flex items-center">
      <Link href="/">
        <a className="flex items-center">
          <img src="/images/logo.png" className="block mr-1 md:mr-2 w-12 h-12" />
          <span className="font-head text-black text-3xl uppercase tracking-widest">
            Super<span className="text-primary-500">ID</span>
          </span>
        </a>
      </Link>
    </header>
    <main className="p-4 md:p-8 lg:px-16 xl:px-32" style={{ height: 'calc(100vh - 80px)' }}>
      {children}
    </main>
    <Footer />
  </div>
)

export default IdentityLayout
