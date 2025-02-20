import { CommonModel } from 'src/models/common.model';

//상품공통정보
export interface ProductCode extends CommonModel {
  prodId: string; // 상품아이디
  prodDivCd: string; // 코드구분(뱃지:B, 인증마크:C, 검색색인어:S)
  prodCode: string; // 코드아이디(뱃지아이디, 인증마크코드)
  useYn: string; // 사용여부
}
