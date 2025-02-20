import { CommonModel } from 'src/models/common.model';
import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';

//기획전
export interface Exhibition extends CommonModel {
  exbibitionId?: string; //기획전아이디
  xbTitle?: string; //기획전타이틀
  xbDispYn?: string; //기획전노출여부
  fileCategoryIdLp?: string; //목록이미지 파일아이디(PC)
  fileCategoryIdLm?: string; //목록이미지 파일아이디(Mobile)
  fileCategoryIdMp?: string; //메인배너이미지 파일아이디(PC)
  fileCategoryIdMm?: string; //메인배너이미지 파일아이디(Mobile)
  xbDispStartDt?: string; //기획전노출시작일
  xbDispEndDt?: string; //기획전노출종료일
  files?: FileInfoBase64[]; //파일 목록
}
