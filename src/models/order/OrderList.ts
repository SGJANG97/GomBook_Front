import { Order } from 'src/models/order/Order';

//주문 목록
export interface OrderList {
  totalSize?: number;
  list: Order[];
}
