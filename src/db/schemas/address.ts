import {
  mysqlTable,
  varchar,
  date,
  char,
  mysqlEnum,
  index,
} from 'drizzle-orm/mysql-core';

const address = mysqlTable(
  'addresses',
  {
    id: varchar('id', { length: 36 }).primaryKey(),
    zipCode: char('zipCode', { length: 8 }).notNull(),
    city: varchar('city', { length: 100 }).notNull(),
    number: varchar('number', { length: 100 }).notNull(),
    district: varchar('disctrict', { length: 100 }).notNull(),
    publicPlace: varchar('publicPlace', { length: 100 }),
    complement: varchar('complement', { length: 200 }),
    state: mysqlEnum('state', [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO',
      'DF',
    ]).notNull(),
    createdAt: date('createdAt').notNull(),
  },
  table => {
    return {
      cityIdx: index('city_idx').on(table.city),
      district: index('district_idx').on(table.district),
    };
  },
);

export { address };
