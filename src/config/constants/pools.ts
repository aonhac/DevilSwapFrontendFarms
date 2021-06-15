import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.dragon,
    earningToken: tokens.dragon,
    contractAddress: {
      97: '0xc446115329aC464AFdab845d6D86ca04BE49e856',
      56: '0xc446115329aC464AFdab845d6D86ca04BE49e856',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
