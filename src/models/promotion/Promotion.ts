import { CommonModel } from 'src/models/common.model';

//프로모션-상품정책
export interface Promotion extends CommonModel {
  promId?: string; // 프로모션아이디
  prodId?: string; // 상품아이디
  prodPromSeq?: number; // 상품프로모션순서
  promName?: string; // 프로모션명
  promUserType?: string; // 적용처 - 거래처/거래처전체/거래처그룹/단가그룹 공통코드 사용
  groupNo?: string; // 유저그룹지정번호
  regNo?: string; // 사업자번호
  userId?: string; // 거래처아이디-전체(그룹)이면ALL
  discRate?: number; // 할인율-소수점은없음
  optCondition?: string; // 옵션사항코드
  promStartDt?: string; // 프로모션시작일 ERP - DT_FROM (YYYYMMDDHHMM)
  promEndDt?: string; // 프로모션종료일 ERP - DT_TO (YYYYMMDDHHMM)
  description?: string; // 비고사항
  promOrdQty?: number; // 프로모션주문량
  promAllocQty?: number; // 프로모션할당량 ERP - QT_ALLOC
  dailyLimitQty?: number; // 일일최대주문개수
  useYn?: string; // 사용여부 - 프로모션 종료여부 같이 사용
}
