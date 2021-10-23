import Header from '../features/Layout/Header'

type Props = {
  children: any
}

const WideLayout = (props: Props) => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-12">{props.children}</main>
      <footer></footer>
    </>
  )
}

export default WideLayout
