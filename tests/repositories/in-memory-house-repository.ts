/* eslint-disable consistent-return */
/* eslint-disable require-await */
import { IHouseRepository } from '@/domain/imobiliary/application/repositories/house-repository';
import { House } from '@/domain/imobiliary/enterprise/entities/house';

class InMemoryHouseRepository implements IHouseRepository {
  private items: House[] = [];

  public async register(house: House): Promise<void> {
    this.items.push(house);
  }

  public async readAll(): Promise<House[]> {
    return this.items;
  }

  public async readById(id: string): Promise<House | null> {
    const house = this.items.find(house => house.id.toValue() === id);
    if (!house) return null;

    return house;
  }

  public async update(newValues: House, id: string): Promise<void | null> {
    const houseToBeUpdatedIndex = this.items.findIndex(
      house => house.id.toValue() === id,
    );

    const NON_EXISTING_INDEX_VALUE = 0;
    if (houseToBeUpdatedIndex < NON_EXISTING_INDEX_VALUE) return null;

    const hasHousesWithSameId = this.items.find(
      house =>
        this.items[houseToBeUpdatedIndex].id.toValue() === house.id.toValue(),
    );
    if (!hasHousesWithSameId) throw new Error('Resource not found!');

    this.items.splice(houseToBeUpdatedIndex, 1, newValues);
  }

  public async deleteHouse(id: string): Promise<void | null> {
    const houseToBeDeletedIndex = this.items.findIndex(
      house => house.id.toValue() === id,
    );

    const NON_EXISTING_INDEX_VALUE = 0;
    if (houseToBeDeletedIndex < NON_EXISTING_INDEX_VALUE) return null;

    this.items.splice(houseToBeDeletedIndex, 1);
  }
}

export { InMemoryHouseRepository };
