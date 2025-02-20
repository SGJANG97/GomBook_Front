import { CommonModel } from 'src/models/common.model';

//상품가격
export interface ProductPrice extends CommonModel {
  priceId: string; // 가격아이디
  prodId: string; // 상품아이디
  prodPriceType: string; // ERP단가유형
  prodPriceAdjType: string; // 상품가격적용타입
  prodPriceAdjStartDt: string; // 상품가격적용시작일
  prodPriceAdjEndDt: string; // 상품가격적용종료일
  prodStdPrice: number; // 상품기준단가
}
