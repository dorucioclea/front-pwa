import Header from '../features/Layout/Header'

type Props = {
  children: any
}

const FrontLayout = ({ children }: Props) => (
  <div className="overflow-hidden">
    <Header />
    <main className="max-w-8xl mx-auto p-4">{children}</main>
    <footer></footer>
  </div>
)

export default FrontLayout
