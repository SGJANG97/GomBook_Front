import { CommonModel } from 'src/models/common.model';

//상품검색어
export interface ProductSchKeyword extends CommonModel {
  prodId: string; // 상품아이디
  prodName: string; // 상품명
  prodEnName: string; // 상품영문명
  brandName: string; // 브랜드명
  brandEnName: string; // 브랜드영문명
  schIdxKeyword: string; // 검색색인어
  schIdxGrpId: string; // 검색그룹색인어 ID
  prodSchKeyword: string; // 상품검색어
  brandIdxKeyword: string; // 브랜드색인어
}
