import { PageModel } from 'src/models/page.model';

//공통코드 검색
export interface CodesReqSearchParams extends PageModel {
  type?: 'master' | 'detail' | null;
  keyword?: string | null;
}
