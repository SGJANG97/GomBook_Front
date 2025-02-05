import { CommonModel } from 'src/models/common.model';

//회사 정보
export interface Company extends CommonModel {
  id?: string;
  name?: string; //이름
  addr?: string; //주소
  fax?: string; //팩스번호
  employerIdNumber?: string; //사업자등록번호
  telNumber?: string; //대표 전화번호
}
