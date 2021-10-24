import { Config } from '../../config'

const Footer = () => (
  <footer className="max-w-8xl mx-auto p-8 flex items-center h-20">
    <p className="text-gray-700 text-xl mb-4">
      <span>Powered by </span>
      <a href={Config.Urls.Elrond} target="_blank" className="text-gray-800 border-none">
        Elrond Blockchain
        <img src="/images/elrond-logo.svg" className="inline-block h-4 mx-2" />
      </a>
      <span>& </span>
      <a href={Config.Urls.Freeiam} target="_blank" className="text-gray-800 border-none">
        Freeiam
        <img src="/images/freeiam-logo.png" className="inline-block h-4 mx-2" />
      </a>
    </p>
  </footer>
)

export default Footer
