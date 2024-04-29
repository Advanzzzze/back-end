import { House } from '@/domain/imobiliary/enterprise/entities/house';
import { IHouseRepository } from '../house-repository';
import { db } from '@/db/database.config';
import { house } from '@/db/schemas/house';
import { eq } from 'drizzle-orm';

class DrizzleHouseRepository implements IHouseRepository {
  public async register(houseProps: House): Promise<void> {
    await db.insert(house).values({
      id: houseProps.id.toValue(),
      name: houseProps.name,
      stage: houseProps.stage,
      type: houseProps.type,
      createdAt: houseProps.createdAt,
    });
  }

  public async readAll(): Promise<House[]> {
    return await db.select().from(house);
  }

  public async readById(id: string): Promise<House | null> {
    return await db.select().from(house).where(eq(house.id, id));
  }

  public async update(newValues: House, id: string): Promise<void | null> {
    await db
      .update(house)
      .set({
        name: newValues.name,
        stage: newValues.stage,
        type: newValues.type,
      })
      .where(eq(house.id, id));
  }

  public async deleteHouse(id: string): Promise<void | null> {
    await db.delete(house).where(eq(house.id, id));
  }
}

export { DrizzleHouseRepository };
