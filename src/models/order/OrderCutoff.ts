import { CommonModel } from 'src/models/common.model';

//주문설정(마감시간)
export interface OrderCutoff extends CommonModel {
  cutoffId: string; //마감아이디(직접배송, 택배배송)
  cutoffTime: string; //마감시간(HHMM)
}
