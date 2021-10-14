import { Config } from '../../config'

type Props = {}

const Navigation = ({}: Props) => (
  <header className="bg-black py-2 px-8 w-full">
    <a href="/" className="flex items-center">
      <img src="/images/logo-white.png" className="block mr-2 w-12 h-12" />
      <span className="font-head text-white text-2xl uppercase tracking-widest">{Config.App.Name}</span>
    </a>
  </header>
)

export default Navigation
