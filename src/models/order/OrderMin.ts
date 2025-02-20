import { CommonModel } from 'src/models/common.model';

//주문설정(최소주문금액)
export interface OrderMin extends CommonModel {
  grpId: string; // 단가그룹아이디
  grpMinAmount: number; // 최소주문금액
}
