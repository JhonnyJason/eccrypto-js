import {
  ZERO32,
  EC_GROUP_ORDER,
  ZERO_LENGTH,
  MAX_KEY_LENGTH,
} from './constants';

export function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

export function isScalar(x: Buffer): boolean {
  return Buffer.isBuffer(x) && x.length === 32;
}

export function isValidPrivateKey(privateKey: Buffer): boolean {
  if (!isScalar(privateKey)) {
    return false;
  }
  return (
    privateKey.compare(ZERO32) > 0 && privateKey.compare(EC_GROUP_ORDER) < 0 // > 0
  ); // < G
}

// Compare two buffers in constant time to prevent timing attacks.
export function equalConstTime(b1: Buffer, b2: Buffer): boolean {
  if (b1.length !== b2.length) {
    return false;
  }
  let res = 0;
  for (let i = 0; i < b1.length; i++) {
    res |= b1[i] ^ b2[i];
  }
  return res === 0;
}

export function isHexString(value: any, length?: number): boolean {
  if (typeof value !== 'string' || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (length && value.length !== 2 + 2 * length) {
    return false;
  }
  return true;
}

export function isValidKeyLength(length: number) {
  return !(
    length <= ZERO_LENGTH ||
    length > MAX_KEY_LENGTH ||
    parseInt(String(length)) !== length
  );
}
