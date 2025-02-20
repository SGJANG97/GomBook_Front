import { CommonModel } from 'src/models/common.model';

//즐겨찾기
export interface Favorite extends CommonModel {
  adminId?: string; //관리자아이디
  userId?: string; //배송처아이디
  useYn?: string; //사용여부
}
