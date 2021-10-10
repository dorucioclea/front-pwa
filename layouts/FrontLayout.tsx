import Navigation from '../features/Layout/Navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const FrontLayout = ({ children }: Props) => (
  <div>
    <Navigation />
    <main className="max-w-7xl mx-auto p-4">{children}</main>
    <footer></footer>
  </div>
)

export default FrontLayout
