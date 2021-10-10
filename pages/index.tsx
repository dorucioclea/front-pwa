import FrontLayout from '../layouts/FrontLayout'
import FrontHero from '../features/Front/FrontHero'
import FrontSection from '../features/Front/FrontSection'
import { NextPage } from 'next'

const Home: NextPage = () => (
  <FrontLayout>
    <FrontHero
      title="Building a better society together"
      description="Elrond Blockchain | Community-owned | Open-Source"
      ctaText="Contribute"
      ctaLink="#"
      className="mb-32"
    >
      <img
        src="/images/logo.png"
        className="absolute right-0 top-4 -z-10 -mr-32 transform rotate-6 opacity-10 sm:opacity-50 md:opacity-75 lg:opacity-100"
      />
    </FrontHero>
  </FrontLayout>
)

export default Home
