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
      description="using technology to push humans forward."
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
      imageClassName="transform rotate-6 animated fadeInLeft fast"
      imageContainerClassName="animated float"
    />
    <FrontQuote title=" We are building the society we want to live in.">
      One where humans dedicate their time to what’s important to them and modern technology does the rest.
    </FrontQuote>
    <FrontSection
      title="Identity"
      titleGradientClassName={['from-indigo-500', 'to-purple-200']}
      description="is how people know you in Superciety"
      className="mb-64"
    />
    <FrontSection
      title="Fellowships"
      titleGradientClassName={['from-red-500', 'to-yellow-200']}
      description="are communities working towards a common goal"
      className="mb-64"
    />
    <FrontSection
      title="Developer Tools"
      titleGradientClassName={['from-blue-500', 'to-indigo-200']}
      description="speed up the creation of your best ideas"
      className="mb-64"
    />
    <FrontSection
      title="Superhuman"
      titleGradientClassName={['from-red-500', 'to-gray-900']}
      description="are the foundation of Superciety"
      className="mb-64"
    >
      <img src="/images/freeiam-logo.png" className="block h-32 transform rotate-6 animate-pulse" />
    </FrontSection>
  </FrontLayout>
)

export default Home
