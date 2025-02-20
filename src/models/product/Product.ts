import { CommonModel } from 'src/models/common.model';

export interface Product extends CommonModel {
  prodId?: string; // 상품아이디
  companyId?: string; // 회사코드
  plantId?: string; // 공장코드
  prodName?: string; // 상품명
  prodEnName?: string; // 상품영문명
  prodGrpCode?: string; // 상품그룹코드 상품그룹코드
  prodStockUnit?: string; // 상품재고단위
  prodItemStd?: string; // 상품규격
  prodValidDt?: string; // 상품유효일
  prodWeight?: number; // 상품중량
  prodWeightUnit?: string; // 상품중량단위
  prodTemperGb?: string; // 상품품온구분
  prodTemperName?: string; // 품온구분코드명
  useYn?: 'Y' | 'N'; // 사용여부
  prodLSize?: number; // 상품가로사이즈
  prodWSize?: number; // 상품세로사이즈
  prodHSize?: number; // 상품높이사이즈
  prodSpecialCnt?: number; // 상품별도입수량
  prodOriginCountry?: string; // 상품원산지
  prodMakeCompany?: string; // 상품제조사
  prodBoxSize?: number; // 상품박스크기
  prodCmb?: number; // 상품 CMB값
  taxYn?: string; // 과세면세여부
  prodBrandCd?: string; // 상품브랜드코드
  prodClassL?: string; // 상품대분류
  prodClassS?: string; // 상품소분류
  prodClassId?: string; // 상품카테고리아이디
  fileCategoryId?: string; // 파일카테고리아이디
  prodBoxCnt?: number; // 박스단위 입수량
  prodOrderUnit?: string; // 별도주문단위
  expOrderChgYn?: string; // 출고예정일 변경 사용여부
  smpOrderYn?: string; // 샘플신청 사용여부
  prodComment?: string; // 상품 소개문구
  prodContents?: Blob; // 상품상세설명
  prodApplCd?: string; // 인증마크(, 콤마로 구분) - 공통코드로 세팅
  prodSetSch?: string; // 지정색인어(, 콤마로 구분) - 검색색인어그룹이외
}
