import { CommonModel } from 'src/models/common.model';

//상품카테고리
export interface ProductCategory extends CommonModel {
  cateId: string; // 카테고리아이디
  classL: string; // 대분류
  classS: string; // 소분류
  cateName: string; // 카테고리명
  dispSeq: number; // 노출순서
  useYn: string; // 사용여부
  delYn: string; // 삭제여부
}
