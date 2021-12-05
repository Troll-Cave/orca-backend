import {Controller, Get} from "@nestjs/common";

import { Schema } from '../types'

import {SchemaService} from '../schema-service';
import {ComponentAttributes, ComponentModel} from '../app-catalog-backend.service';

@Controller("catalog")
export class CatalogController {
  constructor(private schemaService: SchemaService) {
  }

  @Get('schemas')
  getSchemas(): Schema[] {
    return this.schemaService.schemas;
  }

  @Get()
  async getComponents(): Promise<ComponentAttributes[]> {
    return (await ComponentModel.findAll()).map(x => x.toJSON());
  }
}
