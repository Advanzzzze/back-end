/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { IHouseRepository } from '../../../repositories/house-repository';
import { IReadByIdHouseUseCaseResponseDTO } from './read-by-id-house-dto';

class ReadByIdHouseUseCase {
  public constructor(private houseRepository: IHouseRepository) {}

  public async execute(id: string): Promise<IReadByIdHouseUseCaseResponseDTO> {
    const house = await this.houseRepository.readById(id);

    return { house };
  }
}

export { ReadByIdHouseUseCase };
