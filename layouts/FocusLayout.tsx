import Footer from '../features/Layout/Footer'
import Header from '../features/Layout/Header'
import _LoadingCover from './_LoadingCover'

type Props = {
  children: any
  loading?: boolean
}

const FocusLayout = (props: Props) =>
  props.loading ? (
    <_LoadingCover />
  ) : (
    <div className="relative overflow-hidden pb-24 mb:pb-0">
      <Header disableNavigation />
      <main className="p-4 md:p-8 lg:px-16 xl:px-32" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {props.children}
      </main>
      <Footer />
    </div>
  )

export default FocusLayout
