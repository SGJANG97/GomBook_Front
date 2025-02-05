import { PageModel } from 'src/models/page.model';

//공지사항 검색 조건
export interface NoticeReqSearchParams extends PageModel {
  noticeName?: string | null; //제목 title
  visibleStartDt?: string; //게시기간 start
  visibleEndDt?: string; //게시기간 end
  useYn?: string | null; //게시상태
  noticeShowTgt?: string | null; //노출대상
  createStartDt?: string; //등록일 start
  createEndDt?: string; //등록일 end
}
