'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

/**
 base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,38);  // starts with 'G'
 base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,18);
 base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,148); //  starts with 'L'
 base58Prefixes[EXT_PUBLIC_KEY] = {0x06, 0x90, 0xB4, 0x1F};
 base58Prefixes[EXT_SECRET_KEY] = {0x02, 0x86, 0xAB, 0xE5};
 */
exports.bitcoin = {
  messagePrefix: '\xHomelessCoin Signed Message:\n',
  bech32: 'hth',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x64,
  scriptHash: 0x28,
  wif: 0xe4,
};

/**
 Regtest
 base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,65);  0x41
 base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,78);  0x4E
 base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,130); 0x82
 base58Prefixes[EXT_PUBLIC_KEY] = {0x04, 0x35, 0x87, 0xCF};
 base58Prefixes[EXT_SECRET_KEY] = {0x04, 0x35, 0x83, 0x94};
 */
exports.regtest = {
   messagePrefix: '\xHomelessCoin Signed Message:\n',
  bech32: 'hth',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x64,
  scriptHash: 0x28,
  wif: 0xe4,
};

/**
 Test Net
 base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,65);  0x41
 base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,78);  0x4E
 base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,130); 0x82
 base58Prefixes[EXT_PUBLIC_KEY] = {0x04, 0x35, 0x87, 0xCF};
 base58Prefixes[EXT_SECRET_KEY] = {0x04, 0x35, 0x83, 0x94};
 */
exports.testnet = {
   messagePrefix: '\xHomelessCoin Signed Message:\n',
  bech32: 'hth',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x64,
  scriptHash: 0x28,
  wif: 0xe4,
};
