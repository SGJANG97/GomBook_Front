import { CommonModel } from 'src/models/common.model';

//회사 정보
export interface Company extends CommonModel {
  companyId?: string; //회사아이디
  companyName?: string; //회사명
  ceoName?: string; //대표자명
  businessNum?: string; //사업자등록번호
  saleNum?: string; //통신판매업신고번호
  privacyProtectionName?: string; //개인정보보호책임자명
  location?: string; //소재지
  email?: string; //이메일
  phoneNum?: string; //대표전화번호
  fax?: string; //팩스번호
  CustomerPhoneNum?: string; //고객센터 전화번호
  link1?: string; //관련링크1
  link1Desc?: string; //관련링크1설명
  link2?: string; //관련링크2
  link2Desc?: string; //관련링크2설명
  link3?: string; //관련링크3
  link3Desc?: string; //관련링크3설명
}
