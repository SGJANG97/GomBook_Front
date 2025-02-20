import { CommonModel } from 'src/models/common.model';

//주문결제
export interface OrderPayment extends CommonModel {
  orderId: string; // 주문아이디
  ordPayId: string; // 주문결제아이디
  ordPayType: string; // 주문결제방식
  ordPayDt: Date; // 주문결제일시
  ordPayStatus: string; // 주문결제상태
  ordPayAckNo: string; // 주문결제승인번호
  ordPayAmt: number; // 주문결제금액
}
