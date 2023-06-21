import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';

export interface PasswordEncryptor {
  encrypt(password: string): Promise<string>;
}

export class BcryptEncryptor implements PasswordEncryptor {
  async encrypt(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}

export class Sha256Encryptor implements PasswordEncryptor {
  async encrypt(password: string): Promise<string> {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }
}

export class Md5Encryptor implements PasswordEncryptor {
  async encrypt(password: string): Promise<string> {
    const hash = crypto.createHash('md5');
    hash.update(password);
    return hash.digest('hex');
  }
}
