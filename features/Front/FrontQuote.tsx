type Props = {
  children: any
  title?: string
  className?: string
}

const FrontQuote = (props: Props) => (
  <section className={`max-w-4xl mx-auto ${props.className || 'py-20 md:py-48 mb-8'}`}>
    {props.title && <h2 className="text-center mb-8">{props.title}</h2>}
    <p className="text-2xl md:text-3xl text-gray-600 text-center">{props.children}</p>
  </section>
)

export default FrontQuote
