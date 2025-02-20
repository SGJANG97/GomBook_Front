import { Exhibition } from 'src/models/exhibition/Exhibition';

//기획전 목록
export interface ExhibitionList {
  totalSize?: number;
  list?: Array<Exhibition>;
}
