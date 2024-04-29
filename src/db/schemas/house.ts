import { date, index, int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { address } from './address';
import { descriptions } from './description';

const house = mysqlTable(
  'houses',
  {
    id: varchar('id', { length: 36 }).primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    stage: int('stage', { unsigned: true }).notNull().default(1),
    type: int('type', { unsigned: true }).notNull().default(1),
    addressId: varchar('addressId', { length: 36 }).references(
      () => address.id,
    ),
    descriptionId: varchar('descriptionId', { length: 36 }).references(
      () => descriptions.id,
    ),
    createdAt: date('createdAt').notNull(),
  },
  table => {
    return {
      nameIdx: index('name_idx').on(table.name),
      stageIdx: index('stage_idx').on(table.stage),
      typeIdx: index('type_idx').on(table.type),
    };
  },
);

export { house };
