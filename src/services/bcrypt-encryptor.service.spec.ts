import { Test, TestingModule } from '@nestjs/testing';
import { BcryptEncryptorService } from './bcrypt-encryptor.service';

describe('BcryptEncryptorService', () => {
  let service: BcryptEncryptorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptEncryptorService],
    }).compile();

    service = module.get<BcryptEncryptorService>(BcryptEncryptorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
