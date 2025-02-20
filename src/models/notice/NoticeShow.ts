import { CommonModel } from 'src/models/common.model';

//공지사항 노출대상
export interface NoticeShow extends CommonModel {
  noticeId?: string; //공지사항ID
  dispType?: string; //노출대상(거래처전체, 거래처, 단가그룹, 거래처그룹, 비회원) - 공통코드: OMBD001
  noticeShowSeq?: number; //Seq
  noticeTgtId?: string; //노출대상ID
}
