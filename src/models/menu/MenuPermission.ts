import { CommonModel } from 'src/models/common.model';

//유저별 메뉴권한
export interface MenuPermission extends CommonModel {
  userId?: string; //사용자ID
  menuId?: string; //메뉴ID
  authId?: string; //권한ID
  isRead?: string; //조회권한
  isMod?: string; //수정권한
  isDown?: string; //다운로드권한
}
