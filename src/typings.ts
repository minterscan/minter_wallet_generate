export interface IWallet {
  getAddress(): ArrayBuffer | Uint8Array
  getAddressString(): string
  getMnemonic(): string
  getPrivateKey(): string
  getPrivateKeyString(): string
  getPublicKey(): ArrayBuffer | Uint8Array
  getPublicKeyString(): string
}

export enum EOutputMode {
  Manual = 'manual',
  Export = 'export'
}
