import { Test } from '@nestjs/testing';
import { DataBackendService } from './data-backend.service';

describe('DataBackendService', () => {
  let service: DataBackendService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DataBackendService],
    }).compile();

    service = module.get(DataBackendService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
