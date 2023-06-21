export interface PasswordEncryptor {
  encrypt(password: string): Promise<string>;
}
