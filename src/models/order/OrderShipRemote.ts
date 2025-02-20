import { CommonModel } from 'src/models/common.model';

//주문설정(도서산간배송)
export interface OrderShipRemote extends CommonModel {
  zipNo: string; // 우편번호
  addr: string; // 지역명
  remoteFee: number; // 도서산간비용
}
