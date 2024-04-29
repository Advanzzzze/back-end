/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { House } from '@/domain/imobiliary/enterprise/entities/house';
import { IHouseRepository } from '../../../repositories/house-repository';
import { IUpdateHouseUseCaseRequestDTO } from './update-house-dto';

class UpdateHouseUseCase {
  public constructor(private houseRepository: IHouseRepository) {}

  public async execute(
    { stage, type, name }: IUpdateHouseUseCaseRequestDTO,
    id: string,
  ): Promise<void> {
    const houseToBeUpdated = await this.houseRepository.readById(id);

    if (!houseToBeUpdated) throw new Error('Resource not found!');

    const house = House.create({
      name: name ?? houseToBeUpdated.name,
      stage: stage ?? houseToBeUpdated.stage,
      type: type ?? houseToBeUpdated.type,
    });

    await this.houseRepository.update(house, id);
  }
}

export { UpdateHouseUseCase };
