import { CommonModel } from 'src/models/common.model';

//메뉴 권한
export interface MenuAuth extends CommonModel {
  authId?: string; //권한ID
  authName?: string; //권한명
  menuId?: string; //메뉴ID
  isRead?: string; //조회권한
  isMod?: string; //수정권한
  isDown?: string; //다운로드권한
}
