const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "2e88114eb31948769ba54a5aabd4dc0d";
//
// const fs = require('fs');
const mnemonic = "";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/2e88114eb31948769ba54a5aabd4dc0d`),
        network_id: 4,     // rinkeby's id 
        gas: 4500000,
        gasPrice: 21000000000,
        gasLimit: 6721975,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16",   // Fetch exact version from solc-bin (default: truffle's version)
      docker: false       // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}