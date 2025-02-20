import { CommonModel } from 'src/models/common.model';

// 노출 대상
export interface ShowTarget extends CommonModel {
  code?: string; //코드
  name?: string; //코드명
  rn?: number | string; //순번
}
