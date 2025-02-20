import { CommonModel } from 'src/models/common.model';

//공지사항
export interface Notice extends CommonModel {
  noticeId?: string; //공지사항ID
  noticePre?: string; //말머리
  noticeTitle?: string; //공지명
  contents?: string; //공지사항내용
  fixYn?: string; //고정여부
  dispStartDt?: string; //노출시작일 YYYYMMDD
  dispEndDt?: string; //노출종료일 YYYYMMDD
  useYn?: string; //사용여부 - 게시상태 - 게시함, 게시안함
  dispType?: string; //노출대상(거래처전체, 거래처, 단가그룹, 거래처그룹, 비회원) - 공통코드: OMBD001
  mainYn?: string; //메인전용팝업여부
  readYn?: string; //읽음여부
}
