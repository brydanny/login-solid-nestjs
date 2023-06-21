import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { PasswordEncryptor } from './../interfaces/password-encryptor.interface';

@Injectable()
export class Sha256EncryptorService implements PasswordEncryptor {
  async encrypt(password: string): Promise<string> {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    const hashedPassword = hash.digest('hex');
    return hashedPassword;
  }
}
