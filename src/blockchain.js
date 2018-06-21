// blockchain definition

var u = require('axe-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('987a08c31d7f04f47f1aeccdffc73ca4336e32a6615f619b94cc7109e7c2a7ac'),
  time: 1518140231,
  bits: 0x1e0ffff0,
  nonce: 918470
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 70000,
    header: {
      version: 3,
      prevHash: u.toHash('000000000025b8c44c3214b997e969ac49e357aaed4e0f33f433a4faa60017fd'),
      merkleRoot: u.toHash('b31d23e765072f44b93cc6a2fca2b0d730ff034a78c1a7c69e0fad6c7dc49689'),
      time: 1528120762,
      bits: 0x1b2945c8,
      nonce: 1379610632
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
