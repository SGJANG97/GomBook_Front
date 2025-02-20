import { CommonModel } from 'src/models/common.model';

//문의내역상(샘플신청)
export interface ReqSampleCnfm extends CommonModel {
  sampleId: string; // 샘플신청아이디
  sampleSeq: number; // 샘플신청참조아이디
  reqId: string; // 문의신청아이디
  prodId: string; // 상품아이디
  confirmYn: string; // 확정여부
  reqReason: string; // 신청사유
}
