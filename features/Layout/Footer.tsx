import SocialPlatformBar from './SocialPlatformBar'
import { Config } from '../../config'

const Footer = () => (
  <footer className="max-w-8xl mx-auto p-8">
    <div className="flex flex-wrap justify-between items-center mb-8">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <p className="text-gray-700 text-xl">
          <span>Powered by </span>
          <a href={Config.Urls.Elrond} target="_blank" className="text-gray-800 border-none">
            Elrond Blockchain
            <img src="/images/elrond-logo.svg" className="inline-block h-4 mx-2 -mt-1" />
          </a>
          <span>& </span>
          <a href={Config.Urls.Freeiam} target="_blank" className="text-gray-800 border-none">
            Freeiam
            <img src="/images/freeiam-logo.png" className="inline-block h-4 mx-2 -mt-1" />
          </a>
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <ul className="list-none flex divide-x divide-gray-200 text-gray-500">
          <li className="px-2">
            <a href={Config.Urls.Attributions} target="_blank">
              Attributions
            </a>
          </li>
        </ul>
      </div>
    </div>
    <SocialPlatformBar items={Config.Footer.Socials} />
  </footer>
)

export default Footer
