import { CommonModel } from 'src/models/common.model';
import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';

export interface MainBannerPopup extends CommonModel {
  id?: string; //id
  name?: string; //팝업명
  title?: string; //타이틀
  desc?: string; //비고
  linkUrl?: string; //링크 url
  img?: FileInfoBase64; //이미지정보
  showStartDt?: string; //노출 시작 날짜
  showEndDt?: string; //노출 종료 날짜
  showYn?: string; //노출 상태
  showWeekDay?: string; //특정 기간 비노출
  showType?: string; //노출 대상
}
