import { CommonModel } from 'src/models/common.model';

//문의내역상세(반품/배송/취소)
export interface ReqOrder extends CommonModel {
  reqId: string; // 문의아이디
  reqOrderId: string; // 문의요청 상세아이디
  orderId: string; // 주문번호
  ordPickId: string; // 주문출고아이디
  ordPickNo: string; // 주문출고번호
  prodId: string; // 상품아이디
  returnQty: number; // 반품수량
  returnType: string; // 처리유형(반품/재배송)
  expirationDate: string; // 소비기한(YYYYMMDD)
  returnComment: string; // 반품사유
  lotNo: string; // LOT번호
  bigo: string; // 비고
  fileCategoryId: string; // 첨부파일ID
  useYn: string; // 사용여부
}
