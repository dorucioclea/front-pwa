import { Config } from '../../config'

type Props = {}

const Navigation = ({}: Props) => (
  <header className="bg-black p-4 w-full">
    <div className="flex">
      <a
        href="/"
        className="font-head text-white text-xl uppercase tracking-wider"
      >
        {Config.App.Name}
      </a>
    </div>
  </header>
)

export default Navigation
