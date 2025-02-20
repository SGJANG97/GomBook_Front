import { CommonModel } from 'src/models/common.model';

//장바구니
export interface Cart extends CommonModel {
  cartId?: string; //장바구니 아이디
  cartSeq?: number; //장바구니 순번
  userId?: string; //사용자 아이디
  orderYn?: string; //주문처리여부(Y:주문처리완료, N:주문처리전)
  prodId?: string; //상품 아이디
  cartQty?: number; //상품 수량
  cartBoxQty?: number; //상품박스 수량
  prodOption?: string; //상품 옵션(1+1, 2+1 등의 상품관련 옵션)
  prodType?: string; //상품 타입(b급, 임박 등)
}
