import FrontLayout from '../layouts/FrontLayout'
import FrontHero from '../features/Front/FrontHero'
import FrontSection from '../features/Front/FrontSection'
import { NextPage } from 'next'
import { Config } from '../config'

const Home: NextPage = () => (
  <FrontLayout>
    <FrontHero
      title="Building Utopia on Earth"
      description="using technology to push humans forward."
      ctaText="Contribute"
      ctaLink={Config.Urls.Developers}
      className="mb-32"
    >
      <img
        src="/images/logo.png"
        className="absolute right-0 top-4 -z-10 -mr-32 transform rotate-6 opacity-10 sm:opacity-50 md:opacity-75 lg:opacity-100"
      />
    </FrontHero>
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
      <img
        src="/images/freeiam-logo.png"
        className="block h-32 transform rotate-6 animate-pulse"
      />
    </FrontSection>
  </FrontLayout>
)

export default Home
