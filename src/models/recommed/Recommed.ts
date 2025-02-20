import { CommonModel } from 'src/models/common.model';

//추천검색어관리
export interface Recommed extends CommonModel {
  recomId: string; // SEQ
  recomSchWord: string; // 검색어
  linkUrl: string; // 링크경로
  dispYn: string; // 사용여부- 노출상태
  dispSeq: number; // 노출순서
  dispStartDt: string; // YYYYMMDD
}
