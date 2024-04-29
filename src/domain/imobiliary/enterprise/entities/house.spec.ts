/* eslint-disable max-lines-per-function */
import { UniqueEntityId } from '@/core/entities/unique-entity-id';
import { House } from './house';

describe(`#${House.name}`, () => {
  it('should be able to create a house when create method is called', () => {
    const createdHouse = House.create(
      {
        name: 'Casa dos sonhos',
        stage: 0,
        type: 0,
        createdAt: new Date(),
      },
      new UniqueEntityId('1'),
    );

    expect(createdHouse.id.toValue()).toBe('1');
  });

  describe(`#${House.name}/setter`, () => {
    it('should be able to change de name value', () => {
      const createdHouse = House.create(
        {
          name: 'Casa dos sonhos',
          stage: 0,
          type: 0,
          createdAt: new Date(),
        },
        new UniqueEntityId('1'),
      );

      createdHouse.name = 'Outro nome';

      expect(createdHouse.name).toEqual('Outro nome');
    });

    it('should be able to change de stage value', () => {
      const createdHouse = House.create(
        {
          name: 'Casa dos sonhos',
          stage: 0,
          type: 0,
          createdAt: new Date(),
        },
        new UniqueEntityId('1'),
      );

      createdHouse.stage = 1;

      expect(createdHouse.stage).toEqual(1);
    });

    it('should be able to change de type value', () => {
      const createdHouse = House.create(
        {
          name: 'Casa dos sonhos',
          stage: 0,
          type: 0,
          createdAt: new Date(),
        },
        new UniqueEntityId('1'),
      );

      createdHouse.type = 1;

      expect(createdHouse.type).toEqual(1);
    });
  });

  describe(`#${House.name}/getters`, () => {
    it('should be able to get the createdAt value', () => {
      const createdHouse = House.create(
        {
          name: 'Casa dos sonhos',
          stage: 0,
          type: 0,
          createdAt: new Date(),
        },
        new UniqueEntityId('1'),
      );

      const createAt = createdHouse.createdAt;

      expect(createAt).toBeInstanceOf(Date);
    });
  });
});
