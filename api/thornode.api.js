import endpoints from './endpoints'
// axios instance
import { $axiosInstace } from './index'

export function getMimir() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/mimir'
  )
}
export function getDenom() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      'cosmos/bank/v1beta1/denoms_metadata'
  )
}
export function getOutboundFees() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + '/mayachain/outbound_fees'
  )
}
export function getCodes() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + '/mayachain/codes'
  )
}
export function getRunePoolProviders() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/rune_providers'
  )
}

export function getBalance(address) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `bank/balances/${address}`
  )
}

export function getLastBlockHeight() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/lastblock'
  )
}

export function getBlockChainVersion() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/version'
  )
}

export function getRPCLastBlockHeight() {
  const path = 'cosmos/base/tendermint/v1beta1/blocks/latest'
  return $axiosInstace.get(endpoints[process.env.NETWORK].THORNODE_URL + path)
}

export function getNativeTx(txID) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `cosmos/tx/v1beta1/txs/${txID}`
  )
}

export function getThornodeDetailTx(txID) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/tx/details/${txID}`
  )
}

export function getThornodeArchiveTx(txID) {
  if (process.env.NETWORK === 'mainnet') {
    return $axiosInstace.get(
      endpoints[process.env.NETWORK].ARCHIVE_THORNODE +
        `mayachain/tx/details/${txID}`
    )
  }

  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/tx/details/${txID}`
  )
}

export function getTxArchiveStatus(txID) {
  if (process.env.NETWORK === 'mainnet') {
    return $axiosInstace.get(
      endpoints[process.env.NETWORK].ARCHIVE_THORNODE +
        `mayachain/tx/status/${txID}`
    )
  }

  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/tx/status/${txID}`
  )
}

export function getThorNetwork() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/network'
  )
}

export function getInboundAddresses() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/inbound_addresses'
  )
}

export function getMimirVotes() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/mimir/nodes_all'
  )
}

export function getLpPositions(poolName) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `mayachain/pool/${poolName}/liquidity_providers`
  )
}

export function getUserLpPosition(poolName, address) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `mayachain/pool/${poolName}/liquidity_provider/${address}`
  )
}

export function getPoolDetail(poolName) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/pool/${poolName}`
  )
}

export function getDerivedPoolDetail(poolName) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/dpool/${poolName}`
  )
}

export function getAssets() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'cosmos/bank/v1beta1/supply'
  )
}

export function getSupplyRune() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      'cosmos/bank/v1beta1/supply/rune'
  )
}
export function getSupply() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      'cosmos/bank/v1beta1/supply/by_denom?denom=rune'
  )
}

export function getThorPools() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/pools'
  )
}

export function getYggdrasil() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/vaults/yggdrasil'
  )
}

export function getAsgard() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/vaults/asgard'
  )
}

export function getAddresses() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'cosmos/auth/v1beta1/accounts'
  )
}

export function getOutbound() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/queue/outbound'
  )
}

export function getScheduled() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/queue/scheduled'
  )
}

export function getThorchainTx(txID) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/tx/${txID}`
  )
}

export function getNodes() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/nodes'
  )
}

export function getNode(addr) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/node/${addr}`
  )
}

export function getSavers(poolName) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `mayachain/pool/${poolName}/savers`
  )
}

export function getPol() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/pol'
  )
}

export function getRunePool() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/cacaopool'
  )
}

export function getBorrowers(pool) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `mayachain/pool/${pool}/borrowers`
  )
}

export function getConstants() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/constants'
  )
}

export function getStreamingSwap(txid) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `mayachain/swap/streaming/${txid}`
  )
}

export function getStreamingSwaps() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/swaps/streaming'
  )
}

export function getTxStages(txid) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/tx/stages/${txid}`
  )
}

export function getTxStatus(txid) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/tx/status/${txid}`
  )
}

export function getThorname(name) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + `mayachain/mayaname/${name}`
  )
}

export function getTradeAsset(address) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `mayachain/trade/account/${address}`
  )
}

export function getTradeAssets() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/trade/units'
  )
}

export function getThorVersion() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/version'
  )
}

export function getTSSMetrics() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/metrics'
  )
}

export function getSecuredAssets() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL + 'mayachain/securedassets'
  )
}

export function getTCYStaker(address) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].THORNODE_URL +
      `mayachain/tcy_staker/${address}`
  )
}
