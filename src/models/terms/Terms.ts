import { CommonModel } from 'src/models/common.model';

export interface Terms extends CommonModel {
  termsId?: string; //약관아이디 및 버전
  termsType?: string; //약관구분
  termsTypeName?: string; //약관구분명
  termsName?: string; //약관명
  dispYn?: string; //노출여부
  dispYnName?: string; //노출여부명
  useYn?: string; //사용여부
  useYnName?: string; //사용여부명
  termsContents?: string; //약관내용
}
