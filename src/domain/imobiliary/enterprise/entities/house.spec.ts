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
});
