import { Config } from '../../config'

type Props = {}

const Navigation = ({}: Props) => (
  <header className="bg-black py-2 px-8 w-full">
    <div className="flex items-center">
      <img src="/images/logo-white.png" className="block mr-2 w-12 h-12" />
      <a
        href="/"
        className="font-head text-white text-2xl uppercase tracking-widest"
      >
        {Config.App.Name}
      </a>
    </div>
  </header>
)

export default Navigation
