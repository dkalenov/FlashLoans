require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.5" },
      { version: "0.6.6" },
      { version: "0.8.8" },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/3hd9Izfl4SLczdTYWInRZ_9Khn0VOBp4",
      },
    },
    testnet: {
      url: "https://eth-sepolia.g.alchemy.com/v2/rjF3-niNJSvwMLGDPXLnBfMrzY3G94st",
      chainId: 11155111,
      accounts: [
        "0x2be69d08f2982e5f66221cb7ed30a3b6a79364e632c36fb2ca9d8a269833fae4",
      ],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/3hd9Izfl4SLczdTYWInRZ_9Khn0VOBp4",
      chainId: 1,
      accounts: [
        "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d", // This one is fake, change for your real one
      ],
    },
  },
};
