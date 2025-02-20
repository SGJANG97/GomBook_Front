import { CommonModel } from 'src/models/common.model';

//주문설정(무료배송)
export interface OrderShipFree extends CommonModel {
  freeId: string; // 무료배송번호
  freeAmt: number; // 무료배송기준금액
}
