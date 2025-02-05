import { CommonModel, FileInfo } from 'src/models/common.model';

//브랜드
export interface Brand extends CommonModel {
  brandId?: string; //브랜드아이디
  brandCd?: string; //브랜드코드
  brandName?: string; //브랜드명
  brandEnName?: string; //브랜드 영문명
  brandKeywordCd?: string; //브랜드색인어코드
  brandKeywordName?: string; //브랜드색인어명
  brandText?: string; //브랜드설명
  brandShowYn?: string; //브랜드노출상태
  brandShowSeq?: string | number; //브랜드노출순서
  files?: FileInfo[]; //업로드할 파일 목록
  filePath?: string; //업로드 파일 user에서 사용
}
