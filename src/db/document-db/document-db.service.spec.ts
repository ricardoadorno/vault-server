import { Test, TestingModule } from '@nestjs/testing';
import { DocumentDbService } from './document-db.service';

describe('DocumentDbService', () => {
  let service: DocumentDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentDbService],
    }).compile();

    service = module.get<DocumentDbService>(DocumentDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
