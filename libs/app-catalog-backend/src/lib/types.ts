export interface SchemaBase {
  name?: string;
  nullable?: boolean;
  description?: string;
}

// custom type attributes aren't added to the main edit form.
export interface SchemaAttribute extends SchemaBase {
  type: 'number' | 'string' | 'bool' | 'record' | 'custom';
}

export interface SchemaArray extends SchemaBase {
  type: 'array',
  items: SchemaItem
}

export interface SchemaObject extends SchemaBase {
  type: 'object',
  attributes: SchemaItem[]
}

export type SchemaItem = SchemaArray | SchemaAttribute | SchemaObject;

/**
 * @description a defined schema
 */
export interface Schema {
  /**
   * @description The name of the schema for index and display purposes
   */
  name: string;

  ownable?: boolean;

  /**
   * @description A schema this schema extends
   * @default base
   */
  extends?: string;

  /**
   * @description The actual schema definition. You always need to provide this
   * but the attributes can be empty if you don't have anything to add.
   */
  schema: SchemaObject;

  extraData?: SchemaObject;
}
