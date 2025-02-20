import { CommonModel } from 'src/models/common.model';
import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';

//브랜드
export interface Brand extends CommonModel {
  brandId?: string; //브랜드아이디
  brandCd?: string; //브랜드코드
  brandName?: string; //브랜드명
  brandEnName?: string; //브랜드 영문명
  brandKeywordCd?: string; //브랜드색인어코드
  brandKeywordName?: string; //브랜드색인어명
  brandText?: string; //브랜드설명
  brandDispYn?: string; //브랜드노출상태
  brandDispSeq?: string | number; //브랜드노출순서
  fileCategoryId?: string; //파일카테고리아이디
  files?: FileInfoBase64[]; //파일 목록
}
