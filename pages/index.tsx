import type { NextPage } from 'next'
import FrontLayout from '../layouts/FrontLayout'
import FrontHero from '../features/Front/FrontHero'
import FrontSection from '../features/Front/FrontSection'
import FrontQuote from '../features/Front/FrontQuote'
import { Config } from '../config'

const Home: NextPage = () => (
  <FrontLayout>
    <FrontHero
      title="Building Utopia on Earth"
      description="It's 2021, and we still live in a society full of obligations & exploitations."
      image="/images/logo.png"
      ctaText="Explore"
      ctaLink={Config.Urls.Developers}
      footerContent={
        <p className="text-2xl lg:text-3xl text-gray-600">
          Built on Elrond Blockchain
          <img src="/images/elrond-logo.svg" alt="" className="inline-block mx-2 w-6 h-6 md:w-8 md:h-8 opacity-75" />
        </p>
      }
      className="mb-32"
      imageClassName="animated fadeInLeft fast"
      imageContainerClassName="animated float"
    />
    <FrontQuote title={(
        <>We are building the society <span className="highlight"> we want to live in</span>.</>
    )}>
      One where humans dedicate their time to what’s important to them and modern technology does the rest.
    </FrontQuote>
    <p className="text-2xl md:text-3xl text-gray-400 mb-8">One that puts its people over everything else:</p>
    <FrontSection
      title="Identity"
      titleGradientClassName={['from-indigo-500', 'to-purple-200']}
      description="is how people know you in Superciety"
      className="mb-64"
    >
      <span className="font-bold text-4xl text-gray-400">🔜 Coming this year</span>
    </FrontSection>
    <p className="text-2xl md:text-3xl text-gray-400 mb-8">One that incentivizes collaboration instead of competition:</p>
    <FrontSection
      title="Fellowships"
      titleGradientClassName={['from-red-500', 'to-yellow-200']}
      description="are communities working towards a common goal"
      className="mb-64"
    >
      <span className="font-bold text-4xl text-gray-400">🔜 Coming in 2022</span>
    </FrontSection>
    <p className="text-2xl md:text-3xl text-gray-400 mb-8">One that builds tools that are owned by everyone:</p>
    <FrontSection
      title="Public Services"
      titleGradientClassName={['from-pink-600', 'to-purple-300']}
      description="help us free our time and make lives easier"
      className="mb-64"
    >
    <span className="font-bold text-4xl text-gray-400">🔜 Coming this year</span>
    </FrontSection>
    <p className="text-2xl md:text-3xl text-gray-400 mb-8">One with people full of meaning and strength:</p>
    <FrontSection
      title="Superhuman"
      titleGradientClassName={['from-freeiam', 'to-red-400']}
      description="is someone who strives to live a self-determined life"
      className="mb-64"
    >
      <div className="absolute" style={{ right: '-8vw', bottom: '-8vw' }}>
        <img src="/images/freeiam-rush-out.svg" className="block" style={{ width: '42vw' }} />
      </div>
    </FrontSection>
    <FrontQuote title={(
      <>
        We have all the technology & resources available <span className="highlight">to build utopia</span>.
      </>
    )}>
      Now, we need courageous people who don't shy away from tearing down conventional approaches by building systems that make the old ones obsolete.
    </FrontQuote>
  </FrontLayout>
)

export default Home
