import { CommonModel } from 'src/models/common.model';

// 프로모션관리(1+1)
export interface PromotionAdd extends CommonModel {
  promId?: string; // 프로모션아이디 ERP - CD_PROM
  prodId?: string; // 상품아이디 ERP - CD_ITEM
  prodPromSeq?: number; // 상품프로모션순서
  promName?: string; // 프로모션명 ERP - NM_PROM
  promOrderQty?: number; // 주문조건(구매개수)
  promAddQty?: number; // 증정품 개수
  promStartDt?: string; // 프로모션시작일 ERP - DT_FROM (YYYYMMDDHHMM)
  promEndDt?: string; // 프로모션종료일 ERP - DT_TO (YYYYMMDDHHMM)
  promOrdQty?: number; // 프로모션주문량
  useYn?: string; // 사용여부 - 프로모션 종료여부 같이 사용
}
