import { Injectable } from '@nestjs/common';
import {SchemaService} from "@troll-cave/app-catalog-backend";

@Injectable()
export class AppService {
  constructor(private schemaService: SchemaService) {
  }

  getData(): { message: string } {
    return { message: 'Welcome to orca-backend!' };
  }
}
