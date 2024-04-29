import { EConstructionStage } from '@/domain/imobiliary/enterprise/entities/enum/house/EConstructionStage';
import { EPropertyType } from '@/domain/imobiliary/enterprise/entities/enum/house/EPropertyType';
import { House } from '@/domain/imobiliary/enterprise/entities/house';

interface ICreateHouseRequestDTO {
  name: string;
  stage: EConstructionStage;
  type: EPropertyType;
}

interface ICreateHouseResponseDTO {
  house: House;
}

export { ICreateHouseRequestDTO, ICreateHouseResponseDTO };
