/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { IHouseRepository } from '../../../repositories/house-repository';
import { IReadAllHouseUseCaseResponseDTO } from './read-all-house-dto';

class ReadAllHouseUseCase {
  public constructor(private houseRepository: IHouseRepository) {}

  public async execute(): Promise<IReadAllHouseUseCaseResponseDTO> {
    const houses = await this.houseRepository.readAll();

    return { houses };
  }
}

export { ReadAllHouseUseCase };
