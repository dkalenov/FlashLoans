const { ethers } = require("ethers");

// TESTNET PROVIDER
const providerTestnet = new ethers.providers.JsonRpcProvider(
  "YOUR PROVIDER API KEY"
);

// CREATE SIGNER
const myAddress = "METAMSK ADDRESS";
const privateKey =
  "PRIVATE METAMASK KEY";
const walletSigner = new ethers.Wallet(privateKey, providerTestnet);

const exchangeETH = async () => {
  const sendValueHuman = "0.05";
  const gasPrice = await providerTestnet.getGasPrice();
  const nonce = 12; // web3.eth.getTransactionCount(myAddress)
  const txBuild = {
    from: myAddress, // from,
    to: "0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa", // to (WETH on Sepolia Test Network),
    value: ethers.utils.parseEther(sendValueHuman), // value,
    nonce: nonce, // nonce,
    gasLimit: 100000, // gas limit,
    gasPrice: gasPrice, // gas price
  };

  // SEND Transaction
  const txSend = await walletSigner.sendTransaction(txBuild);

  console.log("");
  console.log("TX SEND");
  console.log(txSend);
};

exchangeETH();
