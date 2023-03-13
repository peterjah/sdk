import { ChainId } from './internal'

/**
 * DEX v2 SDK
 */
export const MULTICALL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.AVALANCHE]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ARBITRUM_ONE]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.ARB_GOERLI]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.BNB_CHAIN]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.BNB_TESTNET]: '0xcA11bde05977b3631167028862bE2a173976CA11'
}

export const LB_QUOTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x2644fE413b8Fe94D69c4706455108368fa36354F',
  [ChainId.AVALANCHE]: '0x9dbf1706577636941ab5f443d2aebe251ccd1648',
  [ChainId.ARBITRUM_ONE]: '0x7f281f22eDB332807A039073a7F34A4A215bE89e',
  [ChainId.ARB_GOERLI]: '0x42B0D9a10ee9B96a599C98a618205d0288636762',
  [ChainId.BNB_CHAIN]: '0x89c71F2065aA505956a86FCadAE4a625A5b5e842',
  [ChainId.BNB_TESTNET]: '0x0996216AE051fE4B1d3258fE75b682E75d66E4C0'
}

export const LB_ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x7b50046cEC8252ca835b148b1eDD997319120a12',
  [ChainId.AVALANCHE]: '0xE3Ffc583dC176575eEA7FD9dF2A7c65F7E23f4C3',
  [ChainId.ARBITRUM_ONE]: '0x7BFd7192E76D950832c77BB412aaE841049D8D9B',
  [ChainId.ARB_GOERLI]: '0x6E9603f925FB5A74f7321f51499d9633c1252893',
  [ChainId.BNB_CHAIN]: '0xb66A2704a0dabC1660941628BE987B4418f7a9E8',
  [ChainId.BNB_TESTNET]: '0xf7C6d73336f333b63144644944176072D94128F5'
}

export const LB_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x6B8E020098cd1B3Ec9f811024bc24e51C660F768',
  [ChainId.AVALANCHE]: '0x6E77932A92582f504FF6c4BdbCef7Da6c198aEEf',
  [ChainId.ARBITRUM_ONE]: '0x1886D09C9Ade0c5DB822D85D21678Db67B6c2982',
  [ChainId.ARB_GOERLI]: '0xC8Af41e49e2C03eA14706C7aa9cEE60454bc5c03',
  [ChainId.BNB_CHAIN]: '0x43646A8e839B2f2766392C1BF8f60F6e587B6960',
  [ChainId.BNB_TESTNET]: '0xE082a032Fa1cE68b24594bee0fC57DfE819D107c'
}

export const DEXLENS_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x8b9e4f329f013320670459Bcab01C2b8DC9C32c3',
  [ChainId.AVALANCHE]: '0x16978e42a9b14A19878161A7EdE255637ce361e0',
  [ChainId.ARBITRUM_ONE]: '0xf450749aeA1c5feF27Ae0237C56FecC43f6bE244',
  [ChainId.ARB_GOERLI]: '0x1Be66E6aC1A92f84F6D39E8ED3fc2E0AF8D05747',
  [ChainId.BNB_CHAIN]: '0x532b2e879bE4Ec8b34b055a2a79052E3A96406Dd',
  [ChainId.BNB_TESTNET]: '0xdE2135eCb6b0d4472C976190a3bEd3cE2aA80a86'
}

export const LB_REWARDER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x3e031f1486a27c997e85c5a2af2638ee3a4c28a1',
  [ChainId.AVALANCHE]: '0x624C5b9BEB13af6893e715932c26e2b7A59c410a',
  [ChainId.ARBITRUM_ONE]: '0x624C5b9BEB13af6893e715932c26e2b7A59c410a',
  [ChainId.ARB_GOERLI]: '0x3ca426d8743d46b99814cbf0929912a3ae398238',
  [ChainId.BNB_CHAIN]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}

export const VAULT_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0xECe167a8623D5ab7f8568842d0fC7dAa422467d6',
  [ChainId.AVALANCHE]: '0xBAF3af45a51b89667066917350F504ae9B8d8Ad5',
  [ChainId.ARBITRUM_ONE]: '0xBAF3af45a51b89667066917350F504ae9B8d8Ad5',
  [ChainId.ARB_GOERLI]: '0x0000000000000000000000000000000000000000',
  [ChainId.BNB_CHAIN]: '0xBAF3af45a51b89667066917350F504ae9B8d8Ad5',
  [ChainId.BNB_TESTNET]: '0x0000000000000000000000000000000000000000'
}
