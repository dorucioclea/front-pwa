import Navigation from '../features/Layout/Navigation'

type Props = {
  children: any
}

const FrontLayout = ({ children }: Props) => (
  <div className="overflow-hidden">
    <Navigation />
    <main className="max-w-8xl mx-auto p-4">{children}</main>
    <footer></footer>
  </div>
)

export default FrontLayout
