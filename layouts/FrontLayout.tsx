import Footer from '../features/Layout/Footer'
import Header from '../features/Layout/Header'

type Props = {
  children: any
}

const FrontLayout = ({ children }: Props) => (
  <div className="relative overflow-hidden pb-24 mb:pb-0">
    <Header />
    <main className="max-w-8xl mx-auto p-4">{children}</main>
    <Footer />
  </div>
)

export default FrontLayout
