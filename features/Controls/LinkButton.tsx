import { ReactNode } from 'react'

type Props = {
  children: ReactNode | string
  href: string
}

const LinkButton = (props: Props) => (
  <a
    href={props.href}
    className="inline-flex justify-center items-center py-2 px-6 rounded-xl shadow bg-primary-400 text-xl text-white"
  >
    {props.children}
  </a>
)

export default LinkButton
