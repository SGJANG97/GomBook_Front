import { CommonModel } from 'src/models/common.model';

//메뉴
export interface Menu extends CommonModel {
  menuId?: string; //메뉴ID
  parentMenuId?: string; //상위메뉴ID
  menuName?: string; //메뉴명
  menuPath?: string; //메뉴경로
  menuSeq?: number; //메뉴순서
  useYn?: string; //사용여부
}
