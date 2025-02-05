import { Brand } from 'src/models/brand/Brand';

//브랜드 목록
export interface BrandList {
  totalSize?: number;
  list?: Array<Brand>;
}
