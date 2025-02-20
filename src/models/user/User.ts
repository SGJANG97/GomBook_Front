import { CommonModel } from 'src/models/common.model';

//사용자정보
export interface User extends CommonModel {
  userId: string; // 배송처아이디
  password?: string; // 패스워드
  userName?: string; // 사용자이름
  userPartnerGroup?: string; // 거래처그룹
  partnerId?: string; // 거래처아이디
  priceGroup?: string; // 단가그룹
  userCompanyNo?: string; // 사업자번호
  userCompanyName?: string; // 사업자명
  userCeoName?: string; // 대표자명
  userResNo?: string; // 주민등록번호
  userZipNo?: string; // 사업자소재지_우편번호
  userAddr1?: string; // 사업자소재지_기본주소
  userAddr2?: string; // 사업자소재지_상세주소
  userTelNo?: string; // 전화번호
  userFaxNo?: string; // 팩스번호
  userJobType?: string; // 업태
  userJobClass?: string; // 업종
  userGbType?: string; // 사용자구분 - 본/지점 구분
  userStaffName?: string; // 담당영업직원명
  userStaffEmail?: string; // 담당영업직원이메일
  userStaffTelNo?: string; // 담당영업직원전화번호
  recvPlaceName?: string; // 배송처명
  recvMtodType?: string; // 배송유형
  recvZipNo?: string; // 배송지우편번호
  recvAddr1?: string; // 배송지기본주소
  recvAddr2?: string; // 배송지상세주소
  ordStaffName?: string; // 발주담당자명
  ordStaffEmail?: string; // 발주담당자이메일
  ordStaffTelNo?: string; // 발주담당자전화번호
  description?: string; // 비고
  useCreditYn?: string; // 여신여부
  userStaffId?: string; // 영업사원아이디
  useYn?: string; // 사용여부
  isTmpPassword?: string; // 임시비밀번호여부
  isSalePatner?: string; // 할인고객여부
  userSaleVal?: number; // 고객할인율
  loginStayYn?: string; // 로그인유지여부
  reqTermAgrYn?: string; // 필수약관동의여부
  reqTermAgrDt?: Date; // 필수약관동의일자
  termAgrYn?: string; // 마케팅수신여부동의
  termAgrDt?: Date; // 마케팅수신여부동의일자
  deliStaffId?: string; // 배송담당자 아이디
  deliStaffName?: string; // 배송담당자명
  deliStaffHpNo?: string; // 배송담당자연락처
  deliWeekDay?: string; // 배송요일
  virtualAccoutNo?: string; // 가상계좌번호
  payType?: string; // 결제구분 - 외상, 즉시(콤마로 연결)
  payMtod?: string; // 결제수단 - 가상계좌, 계좌이체, 카드결제(콤마로 연결)
  orderUnitYn?: string; // 별도 주문단위 사용여부
  deliModYn?: string; // 배송유형 수정 가능여부
  deliCourse?: string; // 배송코스(배송유형직배일 경우 상세코스)
}
