import { House } from '@/domain/imobiliary/enterprise/entities/house';

interface IReadByIdHouseUseCaseResponseDTO {
  house: House | null;
}

export { IReadByIdHouseUseCaseResponseDTO };
