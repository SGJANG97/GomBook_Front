import { PageModel } from 'src/models/page.model';

export interface SpecialReqSearchParams extends PageModel {
    // pageNo?:number;
    // pageSize?:number;
    xbName?:string | null; //기획전타이틀
    xbShowYn?:string | null; //노출상태
    xbShowDt?: string; //노출일자
    createStartDt?: string; //등록일 start
    createEndDt?: string; //등록일 end
}
