module.exports = {
  messagePrefix: '\x18DarkCoin Signed Message:\n',
  bip32: {
    public: 0x02fe52f8,
    private: 0x02fe52cc
  },
  pubKeyHash: 0x37,
  scriptHash: 0x10,
  wif: 0x80,
  dustThreshold: 5460 // https://github.com/axerunners/axecore-lib/blob/master/lib/transaction/transaction.js#L66
}
