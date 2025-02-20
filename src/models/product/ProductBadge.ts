import { CommonModel } from 'src/models/common.model';

//상품뱃지
export interface ProductBadge extends CommonModel {
  bdgId: string; // 뱃지아이디
  bdgType: string; // 뱃지 구분
  useYn: string; // 노출상태
  bdgColor: string; // 배경색
  bdgName: string; // 뱃지명
}
