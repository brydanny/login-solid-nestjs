import { Test, TestingModule } from '@nestjs/testing';
import { Sha256EncryptorService } from './sha256-encryptor.service';

describe('Sha256EncryptorService', () => {
  let service: Sha256EncryptorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sha256EncryptorService],
    }).compile();

    service = module.get<Sha256EncryptorService>(Sha256EncryptorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
