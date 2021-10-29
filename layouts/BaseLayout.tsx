import Header from '../features/Layout/Header'
import Footer from '../features/Layout/Footer'

type Props = {
  children: any
}

const BaseLayout = (props: Props) => (
  <div className="overflow-hidden pb-24 mb:pb-0">
    <Header />
    <main className="max-w-6xl mx-auto p-12 mb-20 md:mb-40">{props.children}</main>
    <Footer />
  </div>
)

export default BaseLayout
