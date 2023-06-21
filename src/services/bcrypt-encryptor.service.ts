import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PasswordEncryptor } from './../interfaces/password-encryptor.interface';

@Injectable()
export class BcryptEncryptorService implements PasswordEncryptor {
  async encrypt(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }
}
