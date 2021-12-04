import { Test } from '@nestjs/testing';
import { AppCatalogBackendService } from './app-catalog-backend.service';

describe('AppCatalogBackendService', () => {
  let service: AppCatalogBackendService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppCatalogBackendService],
    }).compile();

    service = module.get(AppCatalogBackendService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
