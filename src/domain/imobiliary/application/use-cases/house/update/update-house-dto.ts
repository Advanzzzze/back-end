import { EConstructionStage } from '@/domain/imobiliary/enterprise/entities/enum/house/EConstructionStage';
import { EPropertyType } from '@/domain/imobiliary/enterprise/entities/enum/house/EPropertyType';

interface IUpdateHouseUseCaseRequestDTO {
  name?: string;
  stage?: EConstructionStage;
  type?: EPropertyType;
}

export { IUpdateHouseUseCaseRequestDTO };
