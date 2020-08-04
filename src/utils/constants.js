let constants = {}
constants.organization = 'tendanetwork'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json',
  PoaNetworkConsensus: 'PoaNetworkConsensus.abi.json',
  BallotStorage: 'BallotsStorage.abi.json',
  EmissionFunds: 'EmissionFunds.abi.json',
  ProxyStorage: 'ProxyStorage.abi.json',
  ValidatorMetadata: 'ValidatorMetadata.abi.json',
  VotingToChangeKeys: 'VotingToChangeKeys.abi.json',
  VotingToChangeMinThreshold: 'VotingToChangeMinThreshold.abi.json',
  VotingToChangeProxyAddress: 'VotingToChangeProxyAddress.abi.json',
  VotingToManageEmissionFunds: 'VotingToManageEmissionFunds.abi.json'
}

constants.NEW_MINING_KEY = {
  label: 'New Mining Key',
  lastNameAndKey: '',
  fullName: '',
  value: '0x0000000000000000000000000000000000000000'
}

constants.minBallotDurationInDays = 2
constants.startTimeOffsetInMinutes = 5
constants.endTimeDefaultInMinutes = 2890
constants.getTransactionReceiptInterval = 5000
constants.rootPath = '/poa-dapps-voting'

constants.navigationData = [
  {
    icon: 'all',
    title: 'All',
    url: `${constants.rootPath}`
  },
  {
    icon: 'active',
    title: 'Active',
    url: `${constants.rootPath}/active`
  },
  {
    icon: 'finalize',
    title: 'To Finalize',
    url: `${constants.rootPath}/tofinalize`
  },
  {
    disabled: true,
    title: 'New Ballot',
    url: `${constants.rootPath}/new`
  }
]

//constants.SOKOL = 'sokol'
//constants.CORE = 'core'
//constants.DAI = 'dai'
//constants.KOVAN = 'kovan'
constants.TENDA = 'tenda-dev'

constants.NETWORKS = {
  '177': {
    NAME: 'Tenda-dev',
    RPC: 'https://rpc.dev.tenda.network',
    BRANCH: 'tenda-dev',
    TESTNET: true
  }
}

/* constants.NETWORKS = {
  '42': {
    NAME: 'Kovan',
    FULLNAME: 'Kovan Testnet',
    RPC: 'https://kovan.infura.io/v3/1125fe73d87c4e5396678f4e3089b3dd',
    BRANCH: constants.KOVAN,
    SORTORDER: 3
  },
  '77': {
    NAME: 'Sokol',
    FULLNAME: 'Sokol Testnet',
    RPC: 'https://sokol.poa.network',
    BRANCH: constants.SOKOL,
    SORTORDER: 4
  },
  '99': {
    NAME: 'Core',
    FULLNAME: 'POA Core',
    RPC: 'https://core.poa.network',
    BRANCH: constants.CORE,
    SORTORDER: 1
  }
}
*/
module.exports = {
  constants
}
