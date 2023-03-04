import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.9',
  },
  networks: {
    // for testnet
    'scrollAlpha': {
      url: 'https://alpha-rpc.scroll.io/l2',
      accounts: [process.env.WALLET_KEY as string],
    },
    // for local dev environment
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.WALLET_KEY as string],
    },
  },
  defaultNetwork: 'hardhat',
};

export default config;