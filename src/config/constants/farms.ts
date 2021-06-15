import tokens from './tokens'
import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'DDRGN',
    tokenSymbol: 'DDRGN',
    lpAddresses: {
      97: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
      56: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
    },
    token: tokens.dragongold,
    quoteToken: tokens.wbnb,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    tokenAddresses: {
      97: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
      56: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
    },
  },
  {
    pid: 1,
    lpSymbol: 'DDRGN-BNB LP',
    lpAddresses: {
      97: '0x6D294908501D9DF3B4c1eE09E0DA15A725255db1',
      56: '0x6D294908501D9DF3B4c1eE09E0DA15A725255db1',
    },
    tokenSymbol: 'DDRGN',
    token: tokens.dragon,
    tokenAddresses: {
      97: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
      56: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'DDRGN-BUSD LP',
    lpAddresses: {
      97: '0x8dc2C97ad4D212a8a79536cbB0285927474A98F8',
      56: '0x8dc2C97ad4D212a8a79536cbB0285927474A98F8',
    },
    tokenSymbol: 'DDRGN',
    token: tokens.dragon,
    tokenAddresses: {
      97: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
      56: '0x9adBa9e0Ebc1a967A9e9aDcF22ad6979f582cd57',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BUSD',
    token: tokens.busd,
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    token: tokens.eth,
    tokenAddresses: {
      97: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    quoteToken: tokens.wbnb,
  }

  // {
  //   pid: 2,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   tokenSymbol: 'SYRUP',
  //   tokenAddresses: {
  //     97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   token: tokens.dragon,
  //   quoteToken: tokens.wbnb,
  // },
]

export default farms
