const fs = require("fs");

function saveNFTs(data) {
  const text = JSON.stringify(data, null, 2);
  fs.writeFileSync("data/nfts.json", text);
}

module.exports = {
  saveNFTs
};
