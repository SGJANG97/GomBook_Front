//노출 대상 등록 목록
export interface NoticeShowTargetInsert {
  noticeShowTgt: string;
}
//노출 대상 삭제 목록
export interface NoticeShowTargetDelete {
  noticeShowSeq: number;
}

//공지사항 노출 대상 등록/수정
export interface NoticeShowTargetSave {
  noticeId?: string; //공지사항 Id
  noticeShowType: string; //노출 타입
  flag: string; //신규: c
  //insertList: 거래처 전체, 비회원일 경우 list 제외
  insertList?: NoticeShowTargetInsert;
  //deleteList: 거래처 전체, 비회원일 경우 list 제외
  deleteList: NoticeShowTargetDelete;
}
