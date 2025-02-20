import { CommonModel } from 'src/models/common.model';

//메인관리
export interface MainMang extends CommonModel {
  mangId?: string; //관리ID
  mangGbn?: string; //관리구분(팝업/배너 구분) - 공통코드???
  mangType?: string; //타입(배너 타입) - 공통코드???
  mangName?: string; //관리명 - 팝업명, 배너명
  mangTitle?: string; //제목
  discription?: string; //설명
  linkUrl?: string; //링크URL
  fileCategoryId?: string; //파일카테고리ID
  dispType?: string; //노출대상(거래처전체, 거래처, 단가그룹, 거래처그룹, 비회원) - 공통코드: OMBD001
  dispStartDt?: string; //노출시작일 - 년월일시분 (YYYYMMDDHH24MI)
  dispEndDt?: string; //노출종료일 - 년월일시분 (YYYYMMDDHH24MI)
  dispYn?: string; //노출상태 - 공통코드???
  dispSeq?: number; //노출순서
  dispCode?: string; //특정기간 비노출 설정 - 공통코드???
}
