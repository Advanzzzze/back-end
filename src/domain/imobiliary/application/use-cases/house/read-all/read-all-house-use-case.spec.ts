/* eslint-disable no-magic-numbers */
/* eslint-disable id-length */
import { House } from '@/domain/imobiliary/enterprise/entities/house';
import { InMemoryHouseRepository } from 'tests/repositories/in-memory-house-repository';
import { ReadAllHouseUseCase } from './read-all-house-use-case';
import { faker } from '@faker-js/faker';

let inMemoryHouseRepository: InMemoryHouseRepository;
let sut: ReadAllHouseUseCase;

describe(`#${ReadAllHouseUseCase.name}`, () => {
  beforeEach(() => {
    inMemoryHouseRepository = new InMemoryHouseRepository();
    sut = new ReadAllHouseUseCase(inMemoryHouseRepository);
  });

  it('should be able to read all registered houses', async () => {
    for (let i = 0; i < 10; i++) {
      const house = House.create({
        name: `Name - ${i}`,
        stage: faker.number.int({ min: 0, max: 1 }),
        type: faker.number.int({ min: 0, max: 2 }),
      });

      inMemoryHouseRepository.register(house);
    }

    const { houses } = await sut.execute();

    expect(houses).toHaveLength(10);
    expect(houses[0].name).toEqual('Name - 0');
  });
});
