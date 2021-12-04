import {Controller, Get} from "@nestjs/common";

import { Schema } from '../types'

import {SchemaService} from '../schema-service';

@Controller("catalog")
export class CatalogController {
  constructor(private schemaService: SchemaService) {
  }

  @Get('schemas')
  getTest(): Schema[] {
    return this.schemaService.schemas;
  }
}
