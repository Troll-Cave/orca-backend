import {Inject, Injectable} from '@nestjs/common';
import {Schema} from './types';
import {SchemaConfig} from "./app-catalog-backend.module";

@Injectable()
export class SchemaService {
  public schemas: Schema[] = [];

  constructor(@Inject('SCHEMA_CONFIG') _schemas: Schema[]) {

    // push the base
    this.addSchema({
      name: 'base',
      schema: {
        type: 'object',
        attributes: [
          {
            name: 'id',
            type: 'string',
            description: 'ID of the component, can be any string but ideally a guid'
          },
          {
            name: 'name',
            type: 'string',
            description: 'The name of the component'
          },
          {
            name: 'annotations',
            type: 'record',
            description: 'Annotations for integrating with other plugins'
          }
        ]
      }
    });

    this.addSchemas(_schemas);
  }

  addSchemas(schemas: Schema[]) {
    schemas.forEach((schema) => {
      this.addSchema(schema)
    });
  }

  addSchema(schema: Schema) {
    // Don't leave duplicate schemas
    this.schemas = this.schemas.filter(x => x.name !== schema.name);
    const base = this.schemas.filter(x => x.name === schema.extends || 'base')[0] || null;

    if (base !== null) {
      // extend the model with the base attributes
      schema.schema.attributes = [...(base.schema?.attributes || []), ...(schema.schema?.attributes || [])];
      schema.extraData.attributes = [...(base.extraData?.attributes || []), ...(schema.extraData?.attributes || [])];
    }

    this.schemas.push(schema);
  }

  getDefaultSchema(): Schema {
    if (this.schemas.length === 1) {
      return this.schemas[0];
    }

    let schema = this.schemas.filter(x => x.name === 'default')[0] || null;

    if (schema === null) {
      // use the base as the default if a default isn't there.
      schema = this.schemas.filter(x => x.name === 'base')[0] || null;
    }

    return schema;
  }
}
