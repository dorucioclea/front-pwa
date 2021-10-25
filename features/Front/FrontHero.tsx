import { ReactNode } from 'react'
import { LinkButton } from '@superciety/pwa-core-library'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type Props = {
  title: string
  description: string
  image: string
  ctaText?: string
  ctaLink?: string
  children?: any
  footerContent?: any
  className?: string
  imageClassName?: string
  imageContainerClassName?: string
}

const FrontHero = (props: Props) => (
  <section
    className={`relative flex flex-col ${
      !!props.children ? 'justify-around' : 'pt-8 md:pt-20 lg:pt-32'
    } ${props.className || ''}`}
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
          <FontAwesomeIcon icon={faArrowRight} className="inline-block ml-4 w-4" />
        </LinkButton>
      )}
    </div>
    <div
      className={`absolute right-0 top-4 -z-10 -mr-32 opacity-10 sm:opacity-50 lg:opacity-75 xl:opacity-100 ${props.imageContainerClassName}`}
    >
      <img src={props.image} className={props.imageClassName} />
    </div>
    {props.children && <div className="flex justify-center items-center text-3xl text-gray-600">{props.children}</div>}
    <footer className="absolute bottom-0 left-0 right-0 h-12 flex justify-center items-center">
      {props.footerContent}
    </footer>
  </section>
)

export default FrontHero
