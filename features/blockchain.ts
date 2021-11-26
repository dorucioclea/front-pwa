import { Address, ContractFunction, GasLimit, SmartContract, TypedValue } from '@elrondnetwork/erdjs'
import { getWalletService } from './wallet'

export const callSmartContract = async (
  contractAddress: string,
  func: string,
  args: TypedValue[],
  gasLimit: number,
  onDone?: () => void
) => {
  // const sc = new SmartContract({ address: new Address(contractAddress) })
  // const tx = sc.call({
  //   func: new ContractFunction(func),
  //   gasLimit: new GasLimit(gasLimit),
  //   args: args,
  // })
  // await getWalletService().sendTransaction(tx)
  // if (onDone) onDone()
}
