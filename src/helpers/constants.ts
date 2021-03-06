export const ENCRYPT_OP = 'encrypt';
export const DECRYPT_OP = 'decrypt';

export const SIGN_OP = 'sign';
export const VERIFY_OP = 'verify';

export const AES_LENGTH = 256;
export const HMAC_LENGTH = 256;

export const AES_BROWSER_ALGO = 'AES-CBC';
export const HMAC_BROWSER_ALGO = `SHA-${AES_LENGTH}`;
export const HMAC_BROWSER = 'HMAC';
export const SHA256_BROWSER_ALGO = 'SHA-256';
export const SHA512_BROWSER_ALGO = 'SHA-512';

export const AES_NODE_ALGO = `aes-${AES_LENGTH}-cbc`;
export const HMAC_NODE_ALGO = `sha${HMAC_LENGTH}`;
export const SHA256_NODE_ALGO = 'sha256';
export const SHA512_NODE_ALGO = 'sha512';

export const HEX_ENC = 'hex';
export const UTF8_ENC = 'utf8';

export const ZERO_LENGTH = 0;
export const PREFIX_LENGTH = 1;

export const KEY_LENGTH = 32;
export const IV_LENGTH = 16;
export const MAC_LENGTH = 32;
export const DECOMPRESSED_LENGTH = 64;

export const PREFIXED_KEY_LENGTH = KEY_LENGTH + PREFIX_LENGTH;
export const PREFIXED_DECOMPRESSED_LENGTH = DECOMPRESSED_LENGTH + PREFIX_LENGTH;

export const MAX_KEY_LENGTH = 1024;
export const MAX_MSG_LENGTH = 32;

export const EMPTY_BUFFER = Buffer.from(new Uint8Array(0));
export const EC_GROUP_ORDER = Buffer.from(
  'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
  HEX_ENC
);
export const ZERO32 = Buffer.alloc(32, 0);
