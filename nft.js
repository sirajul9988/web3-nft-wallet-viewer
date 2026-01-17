const api = require("./api");

async function getNFTs(address) {
  const data = await api.fetchNFTs(address);
  return {
    wallet: address,
    items: data.items || []
  };
}

module.exports = {
  getNFTs
};
