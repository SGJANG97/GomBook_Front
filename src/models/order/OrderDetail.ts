import { CommonModel } from 'src/models/common.model';

//주문상세
export interface OrderDetail extends CommonModel {
  orderId: string; // 주문아이디
  ordSeq: number; // 주문순번
  prodId: string; // 상품아이디
  ordQty: number; // 주문개수
  prodType: string; // 상품타입 - 공통코드???
  prodOption: string; // 상품옵션
  ordAmt: number; // 주문가격
  ordCbm: number; // 주문CBM
  ordPresentQty: number; // 주문증정개수
  ordTotalQty: number; // 주문총개수
  ordProdUnit: string; // 주문상품단위
}
