import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { PasswordEncryptor } from './../interfaces/password-encryptor.interface';

@Injectable()
export class Md5EncryptorService implements PasswordEncryptor {
  async encrypt(password: string): Promise<string> {
    const hash = crypto.createHash('md5');
    hash.update(password);
    const hashedPassword = hash.digest('hex');
    return hashedPassword;
  }
}
