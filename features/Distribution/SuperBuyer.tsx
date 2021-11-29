import { Config } from '../../config'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IHttpService, Input } from '@superciety/pwa-core-library'
import { callSmartContract } from '../blockchain'
import { Balance } from '@elrondnetwork/erdjs'
import { useState } from 'react'

const PricePerTokenScConfig = 0.00002 // EGLD

type Props = {
  httpService: IHttpService
}

const SuperBuyer = (props: Props) => {
  const [amount, setAmount] = useState('1')
  const claimableAmount = +amount > 0 ? Math.round(+amount / PricePerTokenScConfig) : 0

  const handleBuyRequest = () => {
    const distScConfig = Config.Blockchain.SmartContracts.Distribution
    callSmartContract(
      distScConfig.Address,
      distScConfig.Functions.Buy.FunctionName,
      [],
      distScConfig.Functions.Buy.GasLimit,
      Balance.egld(amount)
    )
  }

  return (
    <div>
      <header className="flex justify-center mb-4">
        <img src="/images/super-token-icon.svg" alt="Token Icon" />
      </header>
      <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase mb-4">
        <span className="text-indigo-500">$uper </span>
        <span className="highlight">$ale</span>
      </h1>
      <p className="text-2xl mb-8">This is your chance to get $SUPER tokens usable in Superciety!</p>
      <label htmlFor="amount" className="pl-1 text-xl mb-2">
        How much do you want to convert?
      </label>
      <Input
        id="amount"
        value={amount}
        pre="EGLD"
        placeholder="1"
        type="number"
        onChange={val => setAmount(val)}
        className="mb-8"
      />
      <button
        onClick={handleBuyRequest}
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-2xl rounded-3xl shadow-lg hover:shadow-2xl px-8 py-4"
      >
        Claim your {claimableAmount > 0 ? claimableAmount : ''} $SUPER
        <FontAwesomeIcon icon={faAngleRight} size="lg" className="text-white opacity-75 inline-block ml-2" />
      </button>
    </div>
  )
}

export default SuperBuyer
