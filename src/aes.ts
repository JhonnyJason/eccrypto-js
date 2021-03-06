import { isBrowser, browserAesEncrypt, browserAesDecrypt } from './lib/browser';
import { isNode, nodeAesEncrypt, nodeAesDecrypt } from './lib/node';
import { fallbackAesEncrypt, fallbackAesDecrypt } from './lib/fallback';

export async function aesCbcEncrypt(
  iv: Buffer,
  key: Buffer,
  data: Buffer
): Promise<Buffer> {
  let result;
  if (isBrowser()) {
    result = await browserAesEncrypt(iv, key, data);
  } else if (isNode()) {
    result = await nodeAesEncrypt(iv, key, data);
  } else {
    result = await fallbackAesEncrypt(iv, key, data);
  }
  return result;
}

export async function aesCbcDecrypt(
  iv: Buffer,
  key: Buffer,
  data: Buffer
): Promise<Buffer> {
  let result;
  if (isBrowser()) {
    result = await browserAesDecrypt(iv, key, data);
  } else if (isNode()) {
    result = await nodeAesDecrypt(iv, key, data);
  } else {
    result = await fallbackAesDecrypt(iv, key, data);
  }
  return result;
}
