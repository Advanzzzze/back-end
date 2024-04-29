/* eslint-disable max-lines-per-function */
/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
import { InMemoryHouseRepository } from 'tests/repositories/in-memory-house-repository';
import { UpdateHouseUseCase } from './update-house-use-case';
import { House } from '@/domain/imobiliary/enterprise/entities/house';
import { faker } from '@faker-js/faker';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';

let inMemoryHouseRepository: InMemoryHouseRepository;
let sut: UpdateHouseUseCase;

describe(`#${UpdateHouseUseCase.name}`, () => {
  beforeEach(() => {
    inMemoryHouseRepository = new InMemoryHouseRepository();
    sut = new UpdateHouseUseCase(inMemoryHouseRepository);
  });

  it('should be able to update any house data', async () => {
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

    await sut.execute({ name: 'Custom name' }, '0');

    const houseTest = await inMemoryHouseRepository.readAll();
    expect(houseTest[0]?.name).toEqual('Custom name');
  });

  it('should be able to throw an erro when try to delete an inexisting id', async () => {
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

    await expect(() =>
      sut.execute({ name: 'Custom name' }, '10'),
    ).rejects.toBeInstanceOf(Error);
  });
});
