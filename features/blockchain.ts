import { getWalletService } from './wallet'
import { Address, ContractFunction, GasLimit, SmartContract, TypedValue, Balance } from '@elrondnetwork/erdjs'

export const callSmartContract = async (
  contractAddress: string,
  func: string,
  args: TypedValue[],
  gasLimit: number,
  value?: Balance,
  onDone?: () => void
) => {
  const sc = new SmartContract({ address: new Address(contractAddress) })
  const tx = sc.call({
    func: new ContractFunction(func),
    gasLimit: new GasLimit(gasLimit),
    value: value,
    args: args,
  })
  await getWalletService().sendTransaction(tx)
  if (onDone) onDone()
}
