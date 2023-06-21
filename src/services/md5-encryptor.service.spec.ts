import { Test, TestingModule } from '@nestjs/testing';
import { Md5EncryptorService } from './md5-encryptor.service';

describe('Md5EncryptorService', () => {
  let service: Md5EncryptorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Md5EncryptorService],
    }).compile();

    service = module.get<Md5EncryptorService>(Md5EncryptorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
