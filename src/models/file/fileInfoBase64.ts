import { CommonModel } from 'src/models/common.model';

//파일 정보 base64
export interface FileInfoBase64 extends CommonModel {
  fileCategoryId?: string; //파일 카테고리 아이디
  fileId?: string; //파일 ID
  fileSeq?: number; //파일 순번
  fileName?: string; //파일 명
  fileExt?: string; //파일 확장자
  fileSize?: number; //파일 사이즈(byte)
  filePath?: string; //파일 경로
  fileType?: string; //파일 타입(L:목록, B:배너)
  useYn?: string; //사용여부
  mobileYn?: string; //모바일 사용여부
  file?: string; //파일 base64
}
