import { Injectable } from '@nestjs/common';
import {DataTypes, Model} from "sequelize";
import {DataBackendSequelize} from "@troll-cave/data-backend";

const sequelize = DataBackendSequelize;

export interface ComponentAttributes {
  id?: string;
  name: string;
  component_type?: string;
  annotations: unknown;

  /**
   * @desc the main data for the component type
   */
  data: unknown;

  /**
   * @desc data not part of the main model (only used when a provider is used). These
   * are not part of the model sent to the provider.
   */
  extendedData: unknown;
}

export class ComponentModel extends Model<ComponentAttributes> implements ComponentAttributes
{
  id!: string;
  name!: string;
  component_type!: string;
  annotations!: unknown;
  data!: unknown;
  extendedData!: unknown;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
ComponentModel.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  component_type: {
    type: DataTypes.STRING,
    defaultValue: 'unknown'
  },
  annotations: {
    type: DataTypes.JSONB
  },
  data: {
    type: DataTypes.JSONB
  },
  extendedData: {
    type: DataTypes.JSONB
  }
}, {
  sequelize,
  tableName: 'component'
})

@Injectable()
export class AppCatalogBackendService {}
