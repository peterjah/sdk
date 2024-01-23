import {
  Bin,
  ChainId,
  IERC20,
  IRouter,
  LB_ROUTER_ADDRESS,
  LiquidityDistribution,
  PairV2,
  TokenAmount,
  WMAS as _WMAS,
  USDC as _USDC,
  getLiquidityConfig,
  parseUnits,
  Percent
} from '@dusalabs/sdk'
import {
  BUILDNET_CHAIN_ID,
  ClientFactory,
  DefaultProviderUrls,
  EOperationStatus,
  ProviderType,
  WalletClient
} from '@massalabs/massa-web3'
import { awaitFinalization, logEvents } from './utils'

export const addLiquidity = async () => {
  console.log('\n------- addLiquidity() called -------\n')

  const BUILDNET_URL = DefaultProviderUrls.BUILDNET
  const privateKey = process.env.PRIVATE_KEY
  if (!privateKey) throw new Error('Missing PRIVATE_KEY in .env file')
  const account = await WalletClient.getAccountFromSecretKey(privateKey)
  if (!account.address) throw new Error('Missing address in account')
  const client = await ClientFactory.createCustomClient(
    [
      { url: BUILDNET_URL, type: ProviderType.PUBLIC },
      { url: BUILDNET_URL, type: ProviderType.PRIVATE }
    ],
    BUILDNET_CHAIN_ID,
    true,
    account
  )
  const CHAIN_ID = ChainId.BUILDNET

  // initialize tokens
  const WMAS = _WMAS[CHAIN_ID]
  const USDC = _USDC[CHAIN_ID]

  const router = LB_ROUTER_ADDRESS[CHAIN_ID]

  // set the amounts for each of tokens
  const typedValueUSDC = '20'
  const typedValueWMAS = '20'

  // wrap into TokenAmount
  const tokenAmountUSDC = new TokenAmount(
    USDC,
    parseUnits(typedValueUSDC, USDC.decimals)
  )
  const tokenAmountWMAS = new TokenAmount(
    WMAS,
    parseUnits(typedValueWMAS, WMAS.decimals)
  )

  // increase allowance for the router
  const approveTxId1 = await new IERC20(USDC.address, client).approve(
    router,
    tokenAmountUSDC.raw
  )
  const approveTxId2 = await new IERC20(WMAS.address, client).approve(
    router,
    tokenAmountWMAS.raw
  )
  if (approveTxId1) await awaitFinalization(client, approveTxId1)
  if (approveTxId2) await awaitFinalization(client, approveTxId2)

  // set amount slipage tolerance
  const allowedAmountSlippage = 50 // in bips, 0.5% in this case

  // set price slippage tolerance
  const allowedPriceSlippage = 50 // in bips, 0.5% in this case

  // set deadline for the transaction
  const currenTimeInMs = new Date().getTime()
  const deadline = currenTimeInMs + 3_600_000

  const pair = new PairV2(USDC, WMAS)
  const binStep = 20
  const lbPair = await pair.fetchLBPair(binStep, client, CHAIN_ID)
  const lbPairData = await PairV2.getLBPairReservesAndId(lbPair.LBPair, client)

  // declare liquidity parameters
  const addLiquidityInput = pair.addLiquidityParameters(
    binStep,
    tokenAmountUSDC,
    tokenAmountWMAS,
    new Percent(BigInt(allowedAmountSlippage)),
    new Percent(BigInt(allowedPriceSlippage)),
    LiquidityDistribution.SPOT
  )

  const params = pair.liquidityCallParameters({
    ...addLiquidityInput,
    activeIdDesired: lbPairData.activeId,
    to: account.address,
    deadline
  })

  // call methods
  const txId = await new IRouter(router, client).add(params)
  console.log('txId', txId)

  // await tx confirmation and log events
  await awaitFinalization(client, txId)
  logEvents(client, txId)
}
