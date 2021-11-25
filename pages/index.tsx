import type { NextPage } from 'next'
import FrontLayout from '../layouts/FrontLayout'
import FreeiamFrontSection from '../features/Front/FreeiamFrontSection'
import { FrontQuote } from '@superciety/pwa-core-library'
import { useAppGuard } from '../features/hooks'
import { getHttpService } from '../features/http'
import { FrontSearch } from '../features/Front/FrontSearch'

const Home: NextPage = () => {
  const httpService = getHttpService()

  useAppGuard(httpService, { redirectIfUnauthenticated: false })

  return (
    <FrontLayout>
      <section className="relative pt-20" style={{ height: 'calc(100vh - 80px)' }}>
        <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-300 mb-12" style={{ fontSize: '10rem' }}>
          Build Utopia<br />with us
        </h1>
        <div className="absolute -right-20 top-4 -z-10 opacity-10 sm:opacity-50 lg:opacity-75">
          <img src="/images/storm-world.png" className="animated fadeInLeft fast" style={{ width: '65vh' }} />
        </div>
        <div className="absolute right-0 -bottom-64 bottom -z-10 opacity-10 sm:opacity-50 lg:opacity-75 xl:opacity-100 transform rotate-12">
          <img src="/images/logo.png" className="float w-48" />
        </div>
        <div className="w-full mx-auto max-w-8xl bg-black py-4 px-20 rounded-3xl shadow-lg mb-8">
          {/* <FrontSearch /> */}
          <p className="text-2xl md:text-4xl text-gray-200 text-center opacity-75">
            more coming soon
          </p>
        </div>
        <p className="text-center w-full text-2xl lg:text-3xl text-gray-500">
          Built on Elrond Blockchain
          <img src="/images/elrond-logo.svg" alt="" className="inline-block -mt-2 mx-2 w-6 h-6 md:w-8 md:h-8 opacity-75" />
        </p>
      </section>
      <div className="pt-80 sm:pt-64 md:pt-0">
        <FrontQuote title={(
            <>We are building the society <span className="highlight"> we want to live in</span>.</>
        )}>
          One where humans dedicate their time to what’s important to them and modern technology does the rest.
        </FrontQuote>
      </div>
      <div className="mb-64">
        <h2 className="text-center mb-8">We are dreaming of a Society that</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          <div>
            <p className="text-3xl text-gray-400 mb-2">puts its people over everything else with:</p>
            <section className="w-full p-6 xl:p-8 bg-gradient-to-br from-primary-400 to-blue-300 rounded-3xl shadow-lg">
              <h3 className="text-5xl text-white mb-2">Identity</h3>
              <p className="text-3xl text-white opacity-80 mb-8">is how people know you in Superciety</p>
              <a href="#" className="bg-primary-600 text-white text-lg px-4 py-2 rounded-xl">
                Coming this year
              </a>
            </section>
          </div>
          <div>
            <p className="text-3xl text-gray-400 mb-2">incentivizes collaboration over competition with:</p>
            <section className="w-full p-6 xl:p-8 bg-gradient-to-br from-red-500 to-yellow-200 rounded-3xl shadow-lg">
              <h3 className="text-5xl text-white mb-2">Fellowships</h3>
              <p className="text-3xl text-white opacity-80 mb-8">are communities working towards a common goal</p>
              <a href="#" className="bg-red-700 text-white text-lg px-4 py-2 rounded-xl">
                Coming in 2022
              </a>
            </section>
          </div>
          <div>
            <p className="text-3xl text-gray-400 mb-2">builds tools that are owned by everyone with:</p>
            <section className="w-full p-6 xl:p-8 bg-gradient-to-br from-pink-600 to-purple-300 rounded-3xl shadow-lg">
              <h3 className="text-5xl text-white mb-2">Public Services</h3>
              <p className="text-3xl text-white opacity-80 mb-8">help us free our time and make lives easier</p>
              <a href="#" className="bg-pink-900 text-white text-lg px-4 py-2 rounded-xl">
                Coming in 2022
              </a>
            </section>
          </div>
        </div>
      </div>
      <p className="text-2xl md:text-3xl text-gray-400 mb-8">One with people full of meaning and strength:</p>
      <FreeiamFrontSection />
      <FrontQuote title={(
        <>
          We have all the technology & resources available <span className="highlight">to build utopia</span>.
        </>
      )}>
        Now, we need courageous people who don&apos;t shy away from tearing down conventional approaches by building systems that make the old ones obsolete.
      </FrontQuote>
    </FrontLayout>
  )
}

export default Home
