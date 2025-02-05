import { PageModel } from 'src/models/page.model';

export interface BrandReqSearchParams extends PageModel {
  brandName?: string | null; //브랜드명
  brandCd?: string | null; //브랜드코드
  brandShowYn?: string | null; //노출상태
  createStartDt?: string; //등록일 start
  createEndDt?: string; //등록일 end
}
