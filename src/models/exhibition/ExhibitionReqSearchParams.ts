import { PageModel } from 'src/models/page.model';

//기획전 검색
export interface ExhibitionReqSearchParams extends PageModel {
  xbTitle?: string | null; //기획전타이틀
  xbDispYn?: string | null; //기획전노출여부
  xbDispDt?: string; //노출일자
  createStartDt?: string; //등록일 start
  createEndDt?: string; //등록일 end
}
