import { Entity } from '@/core/entities/entity';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';
import { EPropertyType } from './enum/house/EPropertyType';
import { EConstructionStage } from './enum/house/EConstructionStage';
import { Optional } from '@/core/types/optional';

interface IHouseProps {
  name: string;
  addressId?: UniqueEntityId;
  descriptionId?: UniqueEntityId;
  stage: EConstructionStage;
  type: EPropertyType;
  createdAt: Date;
}

class House extends Entity<IHouseProps> {
  public static create(
    props: Optional<IHouseProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const house = new House(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return house;
  }

  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get stage(): EConstructionStage {
    return this.props.stage;
  }

  set stage(value: EConstructionStage) {
    this.props.stage = value;
  }

  get type(): EPropertyType {
    return this.props.type;
  }

  set type(value: EPropertyType) {
    this.props.type = value;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get addressId(): UniqueEntityId | null {
    return this.props.addressId ?? null;
  }

  get descriptionId(): UniqueEntityId | null {
    return this.props.descriptionId ?? null;
  }
}

export { House, IHouseProps };
