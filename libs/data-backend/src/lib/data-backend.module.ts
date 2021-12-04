import { Module } from '@nestjs/common';
import { DataBackendService } from './data-backend.service';
import { Sequelize } from "sequelize";

export const DataBackendSequelize = new Sequelize('postgres://postgres:garden@localhost:5432/orca');

@Module({
  controllers: [],
  providers: [DataBackendService],
  exports: [DataBackendService],
})
export class DataBackendModule {}
