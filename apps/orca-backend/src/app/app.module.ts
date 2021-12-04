import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppCatalogBackendModule, Schema} from "@troll-cave/app-catalog-backend";

const defaultSchema: Schema = {
  name: 'default',
  schema: {
    type: 'object',
    attributes: []
  },
  extraData: {
    type: 'object',
    attributes: [
      {
        name: 'owner',
        type: 'custom'
      }
    ]
  }
}

@Module({
  imports: [AppCatalogBackendModule.register([defaultSchema])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
