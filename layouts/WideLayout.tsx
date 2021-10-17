import Navigation from '../features/Layout/Navigation'

type Props = {
  children: any
}

const WideLayout = (props: Props) => {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto p-12">{props.children}</main>
      <footer></footer>
    </>
  )
}

export default WideLayout
