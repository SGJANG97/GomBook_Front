import { CommonModel } from 'src/models/common.model';

//공지사항 노출대상
export interface NoticeShow extends CommonModel {
  noticeId?: string; //공지사항ID
  noticeShowType?: string; //공지사항 노출방식
  noticeShowTypeName?: string; //공지사항 노출방식 명
  noticeShowSeq?: number; //Seq
  noticeShowTgt?: string; //공지사항 노출대상
  noticeShowTgtName?: string; //공지사항 노출대상 명
}
