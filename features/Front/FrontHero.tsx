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
    className={`relative flex flex-col justify-center ${props.className || ''}`}
    style={{ height: '80vh' }}
  >
    <div className="max-w-4xl">
      <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-primary-200 mb-4">
        {props.title}
      </h1>
      <p className="text-3xl mb-4">{props.description}</p>
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
  </section>
)

export default FrontHero
