import { CommonModel } from 'src/models/common.model';

//주문
export interface Order extends CommonModel {
  orderId: string; // 주문아이디(주문번호)
  ordUserId: string; // 주문자아이디
  ordPartnerId: string; // 주문자거래처아이디
  ordTotalAmt: number; // 주문총액
  ordStatus: string; // 주문진행상태
  ordSendExpDt: string; // 주문출고예정일
  ordSaleYn: string; // 할인여부
  ordSendMtod: string; // 주문배송방법
  ordRecvPlaceName: string; // 배송처명
  ordSendNewAddr: string; // 주문배송지_새로운주소
  ordSendAddr: string; // 주문배송지
  ordProdSumAmt: number; // 주문공급합산가격
  ordTaxSumAmt: number; // 주문부가세합산가격
  ordDlvSumAmt: number; // 주문배송비합산가격
  ordCbmSum: number; // 주문CBM합산
  ordDt: Date; // 주문일시
  ordQtySum: number; // 주문품목합산
  ordType: string; // 주문구분
  ordBigo: string; // 주문비고_요청사항
  ordPickNo: string; // 주문출고번호
  ordPayMtod: string; // 주문결제방법
  ordPayId: string; // 주문결제아이디_승인번호등
}
