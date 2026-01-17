const config = require("./config");
const nft = require("./nft");
const saver = require("./saver");

async function startApp() {
  console.log("Web3 NFT Wallet Viewer Started");

  const address = config.walletAddress;
  const nftData = await nft.getNFTs(address);

  saver.saveNFTs(nftData);

  console.log("Wallet:", address);
  console.log("Total NFTs:", nftData.items.length);
}

startApp();
