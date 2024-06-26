/* eslint-disable consistent-return */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { IHouseRepository } from '../../../repositories/house-repository';

class DeleteHouseUseCase {
  public constructor(private houseRepository: IHouseRepository) {}

  public async execute(id: string): Promise<void | null> {
    const hasHouseWithId = await this.houseRepository.readById(id);
    if (!hasHouseWithId) return null;

    await this.houseRepository.deleteHouse(id);
  }
}

export { DeleteHouseUseCase };
