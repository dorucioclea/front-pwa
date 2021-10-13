import LinkButton from '../Controls/LinkButton'
import { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  children?: ReactNode
  className?: string
}

const FrontHero = (props: Props) => (
  <section
    className={`relative flex flex-col justify-around pt-8 ${
      props.className || ''
    }`}
    style={{ height: 'calc(100vh - 100px)' }}
  >
    <div className="max-w-3xl">
      <h1 className="text-8xl  text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-300 mb-4">
        {props.title}
      </h1>
      <p className="text-3xl mb-8">{props.description}</p>
      {props.ctaText && props.ctaLink && (
        <LinkButton href={props.ctaLink}>
          {props.ctaText}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="inline-block ml-4 w-4"
          />
        </LinkButton>
      )}
    </div>
    {props.children}
    <div className="flex justify-center items-center text-3xl text-gray-600">
      Built on Elrond
      <img
        src="/images/elrond-logo.svg"
        alt=""
        className="inline-block ml-2 w-8 h-8 opacity-75"
      />
    </div>
  </section>
)

export default FrontHero
