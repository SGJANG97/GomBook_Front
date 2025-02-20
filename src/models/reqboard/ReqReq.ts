import { CommonModel } from 'src/models/common.model';

//문의내역(답변목록)
export interface ReqReq extends CommonModel {
  reqNo: string; // 답변번호
  reqId: string; // 문의아이디
  reqContents: string; // 답변내용
}
