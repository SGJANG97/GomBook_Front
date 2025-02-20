import { CommonModel } from 'src/models/common.model';

//문의내역(사업자정보변경요청)
export interface ReqUser extends CommonModel {
  reqId: string; // 문의아이디
  reqUserId: string; // 사업자정보변경요청아이디
  companyName: string; // 거래처명
  companyNo: string; // 거래처 사업자등록번호
  ceoName: string; // 대표자명
  zipNo: string; // 거래처사업자 우편번호
  addr1: string; // 사업자소재지_기본주소
  addr2: string; // 사업자소재지_상세주소
  telNo: string; // 전화번호
  faxNo: string; // 팩스번호
  jobType: string; // 업태
  jobClass: string; // 업종
  staffEmail: string; // 담당자이메일
  staffTelNo: string; // 담당자연락처
  recvPlaceName: string; // 배송처명
  recvZipNo: string; // 배송지우편번호
  recvAddr1: string; // 배송지주소1
  recvAddr2: string; // 배송지주소2
  ordStaffName: string; // 발주담당자명
  ordStaffTelNo: string; // 발주담당자연락처
  ordStaffEmail: string; // 발주담당자이메일
  confirmYn: string; // 확정여부
}
