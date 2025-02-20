//브랜드 코드 목록
export interface BrandCodeList {
  totalSize?: number;
  list?: Array<BrandCode>;
}

export interface BrandCode {
  brandCd?: string;
  brandName?: string;
  brandEnName?: string;
  brandIdxWord?: string;
  rn?: number;
}
