import { CommonModel } from 'src/models/common.model';

//공통코드 상세
export interface CodesDetail extends CommonModel {
  grpId?: string; //그룹아이디
  code?: string; //코드
  codeName?: string; //코드명
  useYn?: string; //사용여부
  dispSeq?: string; //노출순서
  delYn?: string; //삭제여부
  codeAttr1?: string; //코드속성1
  codeAttr2?: string; //코드속성1
  codeAttr3?: string; //코드속성1
}
