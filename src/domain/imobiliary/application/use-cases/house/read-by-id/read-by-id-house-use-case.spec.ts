/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable id-length */
import { House } from '@/domain/imobiliary/enterprise/entities/house';
import { InMemoryHouseRepository } from 'tests/repositories/in-memory-house-repository';
import { faker } from '@faker-js/faker';
import { ReadByIdHouseUseCase } from './read-by-id-house-use-case';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';

let inMemoryHouseRepository: InMemoryHouseRepository;
let sut: ReadByIdHouseUseCase;

describe(`#${ReadByIdHouseUseCase.name}`, () => {
  beforeEach(() => {
    inMemoryHouseRepository = new InMemoryHouseRepository();
    sut = new ReadByIdHouseUseCase(inMemoryHouseRepository);
  });

  it('should be able to read just one house by its id', async () => {
    const ID_FOR_TEST = '1';

    for (let i = 0; i < 10; i++) {
      const house = House.create(
        {
          name: `Name - ${i}`,
          stage: faker.number.int({ min: 0, max: 1 }),
          type: faker.number.int({ min: 0, max: 2 }),
        },
        new UniqueEntityId(`${i}`),
      );

      inMemoryHouseRepository.register(house);
    }

    const { house } = await sut.execute(ID_FOR_TEST);

    expect(house?.id.toValue()).toEqual(ID_FOR_TEST);
  });

  it('should return null when searched for a non-existent id', async () => {
    const ID_FOR_TEST = '11';

    for (let i = 0; i < 10; i++) {
      const house = House.create(
        {
          name: `Name - ${i}`,
          stage: faker.number.int({ min: 0, max: 1 }),
          type: faker.number.int({ min: 0, max: 2 }),
        },
        new UniqueEntityId(`${i}`),
      );

      inMemoryHouseRepository.register(house);
    }

    const { house } = await sut.execute(ID_FOR_TEST);

    expect(house).toBeNull();
  });
});
