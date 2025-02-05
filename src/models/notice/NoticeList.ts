import { Notice } from 'src/models/notice/Notice';

//공지사항 목록
export interface NoticeList {
  totalSize?: number;
  fixList?: Notice[];
  noticeList?: Notice[];
}
