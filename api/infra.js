import endpoints from './endpoints'
// axios instance
import { $axiosInstace } from './index'

export function getTHORLastBlock() {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].SERVER_URL + 'lastblock'
  )
}

export function getBlockHeight(height) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].SERVER_URL + `block?height=${height}`
  )
}

export function getQuote(params) {
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].SERVER_URL + 'quote',
    {
      params,
    }
  )
}

export function getChurn() {
  return $axiosInstace.get(endpoints[process.env.NETWORK].SERVER_URL + 'churns')
}

export function getInfraEarnings(params) {
  //TODO: Use cache server instead of direct call to midgard
  return $axiosInstace.get(
    endpoints[process.env.NETWORK].MIDGARD_BASE_URL + 'history/earnings',
    {
      params,
    }
  )
}
