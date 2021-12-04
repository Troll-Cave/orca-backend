import {DynamicModule, Module} from '@nestjs/common';
import { AppCatalogBackendService } from './app-catalog-backend.service';
import {SchemaService} from "./schema-service";
import {Schema} from "./types";

import * as controllers from './controllers';

export const SchemaConfig = 'SCHEMA_CONFIG';

@Module({})
export class AppCatalogBackendModule {
  public static register(schemas: Schema[]): DynamicModule {
    return {
      controllers: [...Object.values(controllers)],
      providers: [{ provide: 'SCHEMA_CONFIG', useValue: schemas }, AppCatalogBackendService, SchemaService],
      exports: [AppCatalogBackendService, SchemaService],
      module: AppCatalogBackendModule
    }
  }
}
