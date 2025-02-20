import { CommonModel } from 'src/models/common.model';

//주문출고
export interface OrderPick extends CommonModel {
  orderId: string; // 주문아이디
  userId: string; // 납품처아이디
  partnerId: string; // 거래처아이디
  ordPickId: string; // 주문출고아이디-ERP동기화번호
  ordPickNo: string; // 주문출고번호
  ordPickDt: string; // 주문출고일자
  companyCd: string; // 회사코드 - 공통코드???
  ordPickSeq: number; // 주문출고순서
  prodId: string; // 출고상품아이디
  prodPrice: number; // 상품단가
  ordQty: number; // 상품수량
  ordSupAmt: number; // 공급가액
  ordTaxAmt: number; // 부가세
  ordInvoiceNo: string; // 송장번호
  ordProdType: string; // 주문상품구분자 - 공통코드???
  ordRtnRsnCd: string; // 주문반품사유코드 - 공통코드???
  ordRtnTypeCd: string; // 주문반품유형코드 - 공통코드???
}
