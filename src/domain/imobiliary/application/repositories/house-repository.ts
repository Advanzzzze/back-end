import { House } from '../../enterprise/entities/house';

interface IHouseRepository {
  register(house: House): Promise<void>;
  readAll(): Promise<House[]>;
  readById(id: string): Promise<House | null>;
  update(newValues: House, id: string): Promise<void | null>;
  deleteHouse(id: string): Promise<void | null>;
}

export { IHouseRepository };
