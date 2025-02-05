import { CommonModel, FileInfo } from 'src/models/common.model';

//브랜드
export interface Special extends CommonModel {
    pageNo?:number;
    pageSize?:number;
    xbName?:string;
    xbShowYn?:string;
    xbShowDt?:string;
    createStartDt?:string;
    createEndDt?:string;
//   brandId?: string; //브랜드아이디
//   brandCd?: string; //브랜드코드
//   brandName?: string; //브랜드명
//   brandEnName?: string; //브랜드 영문명
//   brandKeywordCd?: string; //브랜드색인어코드
//   brandKeywordName?: string; //브랜드색인어명
//   brandText?: string; //브랜드설명
//   brandShowYn?: string; //브랜드노출상태
//   brandShowSeq?: string | number; //브랜드노출순서
//   files?: FileInfo[]; //업로드할 파일 목록
}