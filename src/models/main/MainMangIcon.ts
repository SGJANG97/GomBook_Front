import { CommonModel } from 'src/models/common.model';

//아이콘설정관리
export interface MainMangIcon extends CommonModel {
  mangId?: string; //관리ID
  iconId?: string; //아이콘ID
  iconTitle?: string; //아이콘명
  linkUrl?: string; //링크URL
  fileCategoryId?: string; //파일카테고리ID
  showSeq?: number; //노출순서
  highlightYn?: string; //강조여부
}
