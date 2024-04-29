import { InMemoryHouseRepository } from 'tests/repositories/in-memory-house-repository';
import { CreateHouseUseCase } from './create-house-use-case';
import { faker } from '@faker-js/faker';

let inMemoryHouseRepository: InMemoryHouseRepository;
let sut: CreateHouseUseCase;

describe(`#${CreateHouseUseCase.name}`, () => {
  beforeEach(() => {
    inMemoryHouseRepository = new InMemoryHouseRepository();
    sut = new CreateHouseUseCase(inMemoryHouseRepository);
  });

  it('should be able to register a house', async () => {
    const { house } = await sut.execute({
      name: faker.person.fullName(),
      stage: faker.number.int({ min: 0, max: 1 }),
      type: faker.number.int({ min: 0, max: 2 }),
    });

    expect(house.id.toValue()).toEqual(expect.any(String));
  });
});
