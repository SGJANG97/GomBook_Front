import { CommonModel } from 'src/models/common.model';

//공통코드 마스터
export interface CodesMaster extends CommonModel {
  grpId?: string; //그룹아이디
  grpName?: string; //그룹명
  useYn?: string; //사용여부
  grpType?: string; //그룹생성타입
  delYn?: string; //삭제여부
}
