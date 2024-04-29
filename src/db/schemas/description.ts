/* eslint-disable no-magic-numbers */
import {
  mysqlTable,
  varchar,
  date,
  double,
  int,
  decimal,
  index,
} from 'drizzle-orm/mysql-core';

const descriptions = mysqlTable(
  'descriptions',
  {
    id: varchar('id', { length: 36 }).primaryKey(),
    description: varchar('description', { length: 300 }),
    squareOfMeters: double('squareOfMeters').notNull(),
    numberOfBathroom: int('numberOfBathroom', { unsigned: true })
      .notNull()
      .default(1),
    numberOfBadroom: int('numberOfBadroom', { unsigned: true })
      .notNull()
      .default(1),
    numberOfSuites: int('numberOfSuites', { unsigned: true })
      .notNull()
      .default(0),
    numberOfCars: int('numberOfCars', { unsigned: true }).notNull().default(1),
    price: decimal('price', { precision: 10, scale: 10 }),
    createdAt: date('createdAt').notNull(),
  },
  table => {
    return {
      squareOfMetersIdx: index('square_of_meters_idx').on(table.squareOfMeters),
      numberOfBathroomIdx: index('number_of_bathroom_idx').on(
        table.numberOfBathroom,
      ),
      numberOfBadroomIdx: index('number_of_badroom_idx').on(
        table.numberOfBadroom,
      ),
      numberOfSuitesIdx: index('number_of_suites').on(table.numberOfSuites),
      numberOfCarsIdx: index('number_of_cars_idx').on(table.numberOfCars),
      priceIdx: index('price_idx').on(table.price),
    };
  },
);

export { descriptions };
