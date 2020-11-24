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
  messagePrefix: '\x18Gold-BCR Signed Message:\n',
  bech32: 'gbcr',
  bip32: {
    public: 0x0690841f,
    private: 0x0286ABE5,
  },
  pubKeyHash: 0x26,
  scriptHash: 0x12,
  wif: 0x94,
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
  messagePrefix: '\x18Gold-BCR Signed Message:\n',
  bech32: 'rgbcr',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x4e,
  wif: 0x82,
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
  messagePrefix: '\x18Gold-BCR Signed Message:\n',
  bech32: 'tgbcr',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x4e,
  wif: 0x82,
};
