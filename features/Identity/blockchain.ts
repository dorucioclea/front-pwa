import { BytesValue } from '@elrondnetwork/erdjs'
import { Config } from '../../config'
import { callSmartContract } from '../blockchain'

const identitySCAddress = Config.Blockchain.SmartContracts.Identity

export const callIdentifyFreeiamSC = (username: string, onDone?: () => void) =>
  callSmartContract(identitySCAddress, 'setGithub', [BytesValue.fromUTF8(username)], 5000000, onDone)
