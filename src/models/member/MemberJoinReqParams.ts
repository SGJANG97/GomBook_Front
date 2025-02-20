import { FileInfoBase64 } from 'src/models/file/fileInfoBase64';

//회원가입
export interface MemberJoinReqParams {
  askCompanyName?: string; //문의상호명
  askJobClass?: string; //문의업종
  askCompanyAddr1?: string; //문의자 본사 기본 주소
  askCompanyAddr2?: string; //문의자 본사 상세 주소
  askCompanyZipNo?: string; //문의자 본사 우편번호
  askCompanyNo?: string; //문의자 사업자등록번호
  askName?: string; //문의자 성함
  askTelNo?: string; //문의자 연락처
  askNote?: string; //문의자 내용
  askPath?: string; //문의자 경로
  pcFiles?: Array<FileInfoBase64>;
}
