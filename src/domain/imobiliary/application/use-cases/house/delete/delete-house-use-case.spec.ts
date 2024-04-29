/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable id-length */
import { House } from '@/domain/imobiliary/enterprise/entities/house';
import { InMemoryHouseRepository } from 'tests/repositories/in-memory-house-repository';
import { faker } from '@faker-js/faker';
import { DeleteHouseUseCase } from './delete-house-use-case';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';

let inMemoryHouseRepository: InMemoryHouseRepository;
let sut: DeleteHouseUseCase;

describe(`#${DeleteHouseUseCase.name}`, () => {
  beforeEach(() => {
    inMemoryHouseRepository = new InMemoryHouseRepository();
    sut = new DeleteHouseUseCase(inMemoryHouseRepository);
  });

  it('should be able to delete a house by id', async () => {
    for (let i = 0; i < 3; i++) {
      const house = House.create(
        {
          name: `Name - ${i}`,
          stage: faker.number.int({ min: 0, max: 1 }),
          type: faker.number.int({ min: 0, max: 2 }),
        },
        new UniqueEntityId(`${i}`),
      );

      await inMemoryHouseRepository.register(house);
    }
    await sut.execute('0');

    const allHousesRegisteres = await inMemoryHouseRepository.readAll();

    expect(allHousesRegisteres).toHaveLength(2);
    expect(allHousesRegisteres[0].id.toValue()).toEqual('1');
  });

  it('should be able to return null if has two houses with the same id', async () => {
    for (let i = 0; i < 2; i++) {
      const house = House.create(
        {
          name: `Name - ${i}`,
          stage: faker.number.int({ min: 0, max: 1 }),
          type: faker.number.int({ min: 0, max: 2 }),
        },
        new UniqueEntityId(`${i}`),
      );

      await inMemoryHouseRepository.register(house);
    }

    const nullValue = await sut.execute('10');

    expect(nullValue).toBeNull();
  });
});
