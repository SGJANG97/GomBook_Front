import { PageModel } from 'src/models/page.model';

//공지사항 검색
export interface NoticeReqSearchParams extends PageModel {
  noticeTitle?: string | null; //제목 title
  dispStartDt?: string; //게시기간 start
  dispEndDt?: string; //게시기간 end
  useYn?: string | null; //게시상태
  dispType?: string | null; //노출대상
  createStartDt?: string; //등록일 start
  createEndDt?: string; //등록일 end
}
