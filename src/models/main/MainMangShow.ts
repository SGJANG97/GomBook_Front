import { CommonModel } from 'src/models/common.model';

//메인관리노출대상
export interface MainMangShow extends CommonModel {
  mangId?: string; //관리ID
  dispType?: string; //노출대상(거래처전체, 거래처, 단가그룹, 거래처그룹, 비회원) - 공통코드: OMBD001
  mangShowSeq?: number; //노출순서
  mangTgtId?: string; //노출대상ID(단가그룹, 거래처그룹)
}
