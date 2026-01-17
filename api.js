async function fetchNFTs(address) {
  return {
    items: [
      { name: "CryptoArt #1" },
      { name: "PixelNFT #2" },
      { name: "ChainCollectible #3" }
    ]
  };
}

module.exports = {
  fetchNFTs
};
