import { CommonModel } from 'src/models/common.model';

//회원정보신청 - Erp 연동
export interface ErpApplicant extends CommonModel {
  omsReqNo?: string; //OMS신청번호
  reqType?: string; //요청타입
  PartnerName?: string; //거래처명
  companyNo?: string; //사업자번호
  ceoName?: string; //대표자명
  resNo?: string; //주민등록번호
  postNo?: string; //우편번호
  addr1?: string; //기본주소
  addr2?: string; //사업자상세주소
  telNo?: string; //전화번호
  faxNo?: string; //팩스번호
  hpNo?: string; //담당자휴대폰번호
  email?: string; //담당자이메일
  jobType?: string; //업태
  jobClass?: string; //업종
  dlvPostNo?: string; //배송지우편번호
  dlvAddr?: string; //배송지주소
  dlvType?: string; //배송유형
  dlvDtMon?: string; //배송요일_월요일
  dlvDtTue?: string; //배송요일_화요일
  dlvDtWed?: string; //배송요일_수요일
  dlvDtThr?: string; //배송요일_목요일
  dlvDtFri?: string; //배송요일_금요일
  dlvDtSat?: string; //배송요일_토요일
  dlvDtSun?: string; //배송요일_일요일
  ordName?: string; //발주담당자
  ordEmail?: string; //발주담당자이메일
  ordTelNo?: string; //발주담당자전화번호
  mmtPartnerName?: string; //거래처본점명
  taxName?: string; //세금계산서담당자
  taxTelNo?: string; //세금계산서담당자전화번호
  taxEmail?: string; //세금계산서담당자이메일
  progStatusCd?: string; //진행상태코드
  askCompanyName?: string; //문의상호명
  askJobClass?: string; //문의업종
  askCompanyAddr1?: string; //문의자본사기본주소
  askCompanyAddr2?: string; //문의자본사상세주소
  askCompanyZipCd?: string; //문의자본사우편번호
  askCompanyNo?: string; //문의자사업자등록번호
  askName?: string; //문의자성함
  askNote?: string; //문의내용
  askPath?: string; //문의경로
  askDt: string; //문의일자
  askTelNo?: string; //문의자연락처
  fileCategoryId?: string; //파일카테고리아이디
  erpExecYn?: string; //ERP처리여부
  erpSendYn?: string; //ERP전송여부
}
