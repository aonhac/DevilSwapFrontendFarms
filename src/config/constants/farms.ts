import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   lpSymbol: 'DDRGN',
  //   lpAddresses: {
  //     97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
  //     56: '0xd624699726bf512F546509CBc5c8eA723b8Ed0AC',
  //   },
  //   token: tokens.dragongold,
  //   quoteToken: tokens.wbnb,
  // },
  {
    pid: 1,
    lpSymbol: 'DDRGN-BNB LP',
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0x77b03FFDD2d5244ccfb7D2a68d0309fC3e7760dC',
    },
    token: tokens.dragon,
    quoteToken: tokens.wbnb,
  },
]

export default farms
