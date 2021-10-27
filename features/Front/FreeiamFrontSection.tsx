import FrontSection from './FrontSection'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkButton } from '@superciety/pwa-core-library'
import { Config } from '../../config'

const FreeiamFrontSection = () => (
  <FrontSection
    title="Superhuman"
    titleGradientClassName={['from-freeiam', 'to-red-400']}
    description="are the foundation of Superciety"
    className="mb-64"
  >
    <div className="absolute" style={{ right: '-8vw', bottom: '-8vw' }}>
      <img src="/images/freeiam-rush-out.svg" className="block" style={{ width: '42vw', minWidth: '20rem' }} />
    </div>
    <p className="max-w-3xl text-2xl text-gray-500 mb-8">
      They are a source of knowledge & wisdom, are emotionally strong, and live a life of{' '}
      <strong>meaning, creativity, and free play</strong>.
    </p>
    <p className="max-w-3xl text-2xl text-gray-500 mb-4">
      <a href={Config.Urls.Freeiam} target="_blank" className="font-bold text-gray-600 border-none">
        Freeiam
        <img src="/images/freeiam-logo.png" className="inline-block h-5 mx-2 -mt-1" />
      </a>{' '}
      is a service provided by Superciety to help you turn your life around and
    </p>
    <LinkButton href={Config.Urls.Freeiam} color="blue">
      become Superhuman
      <FontAwesomeIcon icon={faFistRaised} className="inline-block ml-2 text-white opacity-75" />
    </LinkButton>
  </FrontSection>
)

export default FreeiamFrontSection
