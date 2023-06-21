import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { BcryptEncryptorService } from './services/bcrypt-encryptor.service';
import { Sha256EncryptorService } from './services/sha256-encryptor.service';
import { Md5EncryptorService } from './services/md5-encryptor.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [
    AppService,
    UsersService,
    {
      provide: 'PASSWORD_ENCRYPTOR',
      useClass: BcryptEncryptorService,
    },
    {
      provide: 'SHA256_ENCRYPTOR',
      useClass: Sha256EncryptorService,
    },
    {
      provide: 'MD5_ENCRYPTOR',
      useClass: Md5EncryptorService,
    },
  ],
})
export class AppModule {}
