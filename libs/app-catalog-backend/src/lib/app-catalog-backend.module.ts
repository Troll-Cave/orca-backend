import { Module } from '@nestjs/common';
import { AppCatalogBackendService } from './app-catalog-backend.service';

@Module({
  controllers: [],
  providers: [AppCatalogBackendService],
  exports: [AppCatalogBackendService],
})
export class AppCatalogBackendModule {}
