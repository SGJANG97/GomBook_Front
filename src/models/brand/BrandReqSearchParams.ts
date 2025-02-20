import { PageModel } from 'src/models/page.model';

//브랜드 검색
export interface BrandReqSearchParams extends PageModel {
  brandName?: string | null; //브랜드명
  brandCd?: string | null; //브랜드코드
  brandDispYn?: string | null; //노출상태
  createStartDt?: string; //등록일 start
  createEndDt?: string; //등록일 end
}
