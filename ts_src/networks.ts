// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
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
export const regtest: Network = {
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
export const testnet: Network = {
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
