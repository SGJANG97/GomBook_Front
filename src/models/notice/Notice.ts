import { CommonModel } from 'src/models/common.model';

//공지사항
export interface Notice extends CommonModel {
  noticeId?: string; //공지사항ID
  noticeName?: string; //공지명
  contents?: string; //공지사항내용
  headLine?: string; //말머리
  visibleEndDt?: string; //표시기한종료일
  visibleStartDt?: string; //표시기한시작일
  fixYn?: string; //고정여부
  fixYnName?: string; //고정여부명
  noticeShowType?: string; //노출대상
  noticeShowTypeName?: string; //노출대상명
  useYn?: string; //게시상태
  useYnName?: string; //게시상태명
  readYn?: string; //읽음여부
  readYnName?: string; //읽음여부명
  mainYn?: string; //메인전용팝업여부
  mainYnName?: string; //메인전용팝업여부명
}
