import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  children?: ReactNode
}

const FrontSection = ({ title, description, children }: Props) => (
  <section className="flex">
    <div className="w-1/2">
      <h1 className="mb-4">{title}</h1>
      <p className="text-2xl text-gray-600">{description}</p>
    </div>
    {children && (
      <div className="w-1/2 flex justify-center items-center">{children}</div>
    )}
  </section>
)

export default FrontSection
