import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  children?: ReactNode
  className?: string
  titleGradientClassName?: [string, string]
}

const FrontSection = (props: Props) => {
  const titleColorClassName =
    props.titleGradientClassName && props.titleGradientClassName.length > 0
      ? `text-transparent bg-clip-text bg-gradient-to-br ${props.titleGradientClassName[0]} ${props.titleGradientClassName[1]}`
      : 'text-gray-800'

  return (
    <section className={`flex flex-wrap bg-gray-50 p-12 rounded-xl ${props.className || 'mb-8'}`}>
      <div className="w-full md:w-2/3">
        <h1 className={`text-5xl md:text-6xl mb-4 ${titleColorClassName}`}>{props.title}</h1>
        <p className="text-2xl md:text-3xl text-gray-600">{props.description}</p>
      </div>
      {props.children && <div className="w-full md:w-1/3 flex justify-center items-center">{props.children}</div>}
    </section>
  )
}

export default FrontSection
