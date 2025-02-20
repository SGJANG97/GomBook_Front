import { CommonModel } from 'src/models/common.model';

//검색색인어그룹
export interface SchIdxGroup extends CommonModel {
  schGrpId: string; // 검색그룹아이디
  schKeyword: string; // 검색키워드
  schGrpName: string; // 검색그룹명
  useYn: string; // 사용여부
}
