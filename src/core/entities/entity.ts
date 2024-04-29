import { UniqueEntityId } from './unique-entity-id';

class Entity<TProps> {
  private _id: UniqueEntityId;
  protected props: TProps;

  protected constructor(props: TProps, id?: UniqueEntityId) {
    this.props = props;
    this._id = id ?? new UniqueEntityId();
  }

  get id(): UniqueEntityId {
    return this._id;
  }
}

export { Entity };
