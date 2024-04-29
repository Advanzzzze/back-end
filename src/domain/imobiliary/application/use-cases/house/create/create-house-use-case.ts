/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { House } from '@/domain/imobiliary/enterprise/entities/house';
import { IHouseRepository } from '../../../repositories/house-repository';
import {
  ICreateHouseRequestDTO,
  ICreateHouseResponseDTO,
} from './create-house-dto';

class CreateHouseUseCase {
  public constructor(private houseRepository: IHouseRepository) {}

  public async execute({
    name,
    stage,
    type,
  }: ICreateHouseRequestDTO): Promise<ICreateHouseResponseDTO> {
    const house = House.create({ name, stage, type });

    await this.houseRepository.register(house);

    return { house };
  }
}

export { CreateHouseUseCase };
