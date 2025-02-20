import { CommonModel } from 'src/models/common.model';

//관계상품
export interface ProductRel extends CommonModel {
  prodId: string; // 상품아이디
  relType: string; // 관련종류
  relSeq: number; // 순번
  dispSeq?: number; // 전시순서 (optional, default 0)
  relProdId?: string; // 관련상품아이디 (optional)
  useYn?: string; // 사용여부 (optional, default 'Y')
}
