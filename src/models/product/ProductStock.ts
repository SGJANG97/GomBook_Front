import { CommonModel } from 'src/models/common.model';

//상품재고
export interface ProductStock extends CommonModel {
  companyId: string; // 회사코드
  plantId: string; // 공장코드
  prodId: string; // 상품아이디
  prodCargo: string; // 창고
  prodState: string; // 상태구분
  prodErpQty: number; // ERP상품재고량
  prodExpDate: string; // 유통기한
  prodOmsPromQty: number; // OMS프로모션상품재고량
  prodOmsQty: number; // OMS할당재고량
}
