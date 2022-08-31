require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      // This value will be replaced on runtime
      url: process.env.STAGING_INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
